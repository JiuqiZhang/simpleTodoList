import React, {useState} from 'react';
import { Keyboard, Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Task from './components/Task';
export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const deleteTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>

      {/* Workout of the day*/}
      <View style = {styles.taskWrapper}>
      <Text style = {styles.sectionTitle}>Today's to-do tasks</Text>
      <View style = {styles.items}>
      {/*This is for tasks*/ }

      {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
      </View>
      </View>

      {/* write task section */}
      <KeyboardAvoidingView 
      behaviour = {Platform.OS === "ios" ? "padding" : "height"}
      style = {styles.writeTaskWrapper}>
        <TextInput style = {styles.input} placeholder = { "write your plan"} value = {task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() => addTask()}>
        <View style = {styles.addWrapper}>
          <Text style = {styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff0',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input:{
      paddingVertical: 20,
      paddingHorizontal: 25,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#d6d4d4',
      borderWidth: 1,
      width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d6d4d4',
    borderWidth: 1,
  },
  addText:{

  },
});
