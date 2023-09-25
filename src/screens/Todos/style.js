import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/GlobalStyle';

const style = StyleSheet.create({
  timePickerContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePickerText: {
    color: colors.primary_color,
    fontSize: 30,
    fontWeight: 'bold',
  },
  taskListContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: colors.boxborder_color,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonContainer: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.primary_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  addButton: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
  taskItem: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.boxborder_color,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  // New styles for checkboxes and completed tasks
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: colors.primary_color,
    borderColor: colors.primary_color,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },

  // Styles for the modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // For shadow on Android
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  addButtonModal: {
    backgroundColor: colors.primary_color,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default style;
