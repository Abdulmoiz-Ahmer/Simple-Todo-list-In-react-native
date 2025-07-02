import React from 'react'
import { FlatList, Pressable, View, StyleSheet,Text} from 'react-native'

export const List = (props:{setTodoList:(newValue: Array<{key:string,title:string}>) => void, todoList:Array<{key:string,title:string}>})=>{

  function deleteFromList(key: string){
    const newArray = props.todoList.filter((item)=>item.key!=key);
    props.setTodoList(newArray);
  }

  return (
    <View>
        <FlatList
        data={props.todoList}
        renderItem={({item}) =>{
        return (<Pressable android_ripple={{color:'#fff'}} style={({pressed})=>pressed && styles.pressableEffect}>
                    <Text style={{color:'white', borderColor:"red", padding:12, marginTop:10, backgroundColor:'blue'}} onPress={()=>deleteFromList(item.key)}>
                        {item.title}
                    </Text>
                </Pressable>)
        }}
        keyExtractor={item => item.key}
        />
  </View>
  )
}

const styles = StyleSheet.create({
    pressableEffect:{
      opacity:0.5
    },
});
