import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import style from './style';
import MainLogo from '../../components/MainLogo/MainLogo';
import globalStyle, {colors} from '../../../assets/styles/GlobalStyle';
import {Trash} from 'react-native-feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const TodosScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const userUid = auth().currentUser.uid;
  const formattedDate = selectedDate.toISOString().split('T')[0];
  const docRef = firestore()
    .collection('users')
    .doc(userUid)
    .collection('tasks')
    .doc(formattedDate);

  const addTask = async () => {
    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const userUid = auth().currentUser.uid;

      const docRef = firestore()
        .collection('users')
        .doc(userUid)
        .collection('tasks')
        .doc(formattedDate);

      const doc = await docRef.get();

      if (doc.exists) {
        await docRef.update({
          tasks: firestore.FieldValue.arrayUnion({
            task: newTask,
            completed: false,
          }),
        });
      } else {
        await docRef.set({
          date: formattedDate,
          tasks: [{task: newTask, completed: false}],
        });
      }

      setNewTask('');
      setModalVisible(false);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const fetchTasksForSelectedDate = () => {
    try {
      const unsubscribe = docRef.onSnapshot(doc => {
        if (doc.exists) {
          const data = doc.data();
          if (data && data.tasks !== undefined) {
            setTasks(data.tasks);
          } else {
            setTasks([]);
          }
        } else {
          setTasks([]);
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasksForSelectedDate();
  }, [selectedDate]);

  const toggleTaskCompletion = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);

    updateTaskCompletionInFirestore(updatedTasks);
  };

  const updateTaskCompletionInFirestore = async updatedTasks => {
    try {
      await docRef.update({
        tasks: updatedTasks,
      });
    } catch (error) {
      console.error('Error updating task completion:', error);
    }
  };

  const deleteTask = async index => {
    try {
      const updatedTasks = [...tasks];
      const deletedTask = updatedTasks.splice(index, 1)[0];

      await docRef.update({
        tasks: updatedTasks,
      });

      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <SafeAreaView style={globalStyle.flex}>
      <ScrollView>
        <MainLogo marginTop={10} />
        <View style={style.timePickerContainer}>
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, newDate) => {
              setSelectedDate(newDate || selectedDate);
            }}
          />
        </View>
        <View style={style.taskListContainer}>
          {tasks.length === 0 ? (
            <Text style={{fontWeight: 'bold'}}>Add New Task For Today</Text>
          ) : (
            <FlatList
              scrollEnabled={false}
              data={tasks}
              renderItem={({item, index}) => (
                <View style={style.taskItem}>
                  <Pressable
                    style={[style.checkbox, item.completed && style.checked]}
                    onPress={() => toggleTaskCompletion(index)}>
                    {item.completed && <Text>X</Text>}
                  </Pressable>
                  <Text
                    style={[
                      style.taskText,
                      item.completed && style.completedTaskText,
                    ]}>
                    {item.task}
                  </Text>
                  <Pressable onPress={() => deleteTask(index)}>
                    <Trash color={colors.primary_color} />
                  </Pressable>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </ScrollView>
      <Pressable
        style={style.addButtonContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={style.addButton}>+</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text style={style.modalTitle}>Add Task</Text>
            <TextInput
              style={style.input}
              placeholder="Enter task"
              onChangeText={text => setNewTask(text)}
              value={newTask}
            />
            <Pressable style={style.addButtonModal} onPress={addTask}>
              <Text style={style.addButton}>Add</Text>
            </Pressable>
            <Pressable
              style={style.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={style.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TodosScreen;
