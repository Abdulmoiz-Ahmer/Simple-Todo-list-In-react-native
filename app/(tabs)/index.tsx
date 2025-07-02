import { useState } from 'react';
import { View, Button, } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { AddItem } from '@/components/AddItem';
import { List } from '@/components/List';


export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [todoList, setTodoList] = useState<Array<{key:string,title:string}>>([]);
  const [input, setInput] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          marginRight: 12,
          marginLeft: 12,
        }}
      >
        <Button title='Add' onPress={()=>setModalVisible(true)}  />
        <AddItem setTodoList={setTodoList} todoList={todoList} input={input} setInput={setInput} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <List todoList={todoList} setTodoList={setTodoList}/>
      </View>
    </SafeAreaProvider>
  );
}


