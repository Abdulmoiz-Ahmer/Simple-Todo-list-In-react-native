import React from 'react'
import { Button, TextInput, View , StyleSheet, Modal, SafeAreaView} from 'react-native'

export const AddItem = (props:{setTodoList:(newValue: Array<{key:string,title:string}>) => void, todoList:Array<{key:string,title:string}>, input:string, setInput:(newValue: string) => void, modalVisible: boolean, setModalVisible:(newValue:boolean)=>void})=> {

function addToList(): void {
    if(props.input===''){
        return;
    }


    props.setTodoList([...props.todoList, {key: `${props.todoList.length+1}`,title: props.input}])
    close(false);
}

function close(param:boolean):void{
    props.setModalVisible(param);
}

  return (
    <Modal animationType="slide"
       visible={props.modalVisible}
    >
        <View
        style={styles.container}>
            <View style={styles.addItemContainer}>
                <TextInput
                    style={styles.inputBar}
                    placeholder="Type here!"
                    defaultValue={props.input}
                    onChangeText={props.setInput}
                    placeholderTextColor="#ffffff" 
                />

                <View style={styles.button}>
                    <Button title='Add' onPress={()=>addToList()} />
                </View>  
         </View>
         <View style={{padding:10}}> 
            <Button title='Cancel' onPress={()=>close(false)} />
         </View>
    </View>
  </Modal>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
        justifyContent:'center'
    },

    addItemContainer:{
        padding:10,
        justifyContent:'center',
        flexDirection:'row',
    },

    inputBar:{
      flex: 8, 
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginRight: 12,
      borderRadius:5,
      color:'white',
      borderColor:'white',
    },

    button:{ 
        flex: 2,
    }
  });