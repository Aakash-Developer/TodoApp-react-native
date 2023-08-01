import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
export default function App() {

  const [task,setTask]= useState("")
  const [taskList,setTaskList] = useState([])

  const InputHandler=(val)=>{
    setTask(val)
  }

  const OnAddHandler=()=>{
    if(task){
      let date= Date.now();
      let newTask={
      id:`${date}`,
      task:task,
      }
      setTaskList([...taskList,newTask].reverse())
      setTask("")
    }
  }
  const deleteHandler=(id)=>{
    setTaskList(taskList.filter((item)=>item.id !== id))
  }

  return (
         <View style={[styles.container,]}>

         <View style={[styles.TopHeader,styles.bg_Second]}><Text style={[{fontSize:30,textTransform:"uppercase",fontWeight:"900"},styles.textWhite]}>Mac's technology</Text></View>
         <View style={[styles.AppTitle,styles.bg_Second]}><Text style={[styles.textWhite, {fontSize:20,fontWeight:"700",textTransform:"capitalize"}]}>Todo list application</Text></View>
         
         <View style={[{flexDirection:"row",gap:2,alignItems:"flex-start",marginTop:20,padding:15}]}>
         <View style={[styles.textInputBox,{height:50}]}><TextInput placeholder='Enter name' style={styles.font20} value={task} onChangeText={InputHandler}/></View>
         <View style={[styles.addBtnBox,styles.bg_Primary,{height:50}]}>
         <TouchableOpacity onPress={OnAddHandler}>
         <Text style={[styles.font20,styles.textWhite,{textAlign:"center",fontWeight:"800"}]}>Add</Text>
         </TouchableOpacity>
         </View>
         </View>

         <View style={[styles.container,{flex:5,padding:15}]}>
         <View style={[{flex:1,backgroundColor:"#F8F8F8	",borderRadius:10,padding:5}]}>
         <FlatList
         data={taskList}
         renderItem={({item})=>
         <View style={[styles.ListItem,styles.shadowProp,{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}]} key={item.id}>
         <Text style={{fontSize:22}}>
         {item.task}</Text>
         <MaterialIcons name="delete-forever" size={30} color="red" onPress={()=>deleteHandler(item.id)} />
         </View>
          }/>
         </View>
         </View>

         </View>
  );
}

const styles = StyleSheet.create({
  textWhite:{
    color:"#ffffff"
  },
  font20:{
    fontSize:20
  },
  bg_Main:{
    backgroundColor:"#000000"
  },
  bg_Second:{
    backgroundColor:"#3E065F"
  },
  bg_Primary:{
    backgroundColor:"#700B97"
  },
  bg_White:{
    backgroundColor:"#000000"
  },
  container:{
    flex:1,
    padding:0,
  },
  TopHeader:{
    height:100,
    justifyContent:"flex-end",
    alignItems:"center",
    padding:10
  },
  AppTitle:{
    height:60,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    width:"100%",
    marginLeft:"auto",
    marginRight:"auto",
    borderBottomStartRadius:40,
    borderBottomEndRadius:40
  },
  textInputBox:{
    flex:4,
    borderWidth:2,
    borderColor:"#3E065F",
    padding:10,
    borderTopLeftRadius:20,
    borderBottomStartRadius:20
  },
  addBtnBox:{
    flex:1,
    borderWidth:2,
    borderColor:'#3E065F',
    padding:11,
    borderTopRightRadius:20,
    borderBottomRightRadius:20
  },
  ListItem:{
    padding:15,
    backgroundColor:"#d8cddf",
    color:"#000000",
    fontSize:20,
    marginBottom:8,
    borderRadius:10
  },
  shadowProp: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.10,
shadowRadius: 1.62,

elevation: 2,
  },
  checkbox: {
    alignSelf: 'center',
  }
});
