// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, CheckBox, Button } from "react-native";
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Button } from '@rneui/base';
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState(null);

  const addInTodoList = () => {
    setTodoList([...todoList, { title: textInput, isDone: false }]);
    return setTextInput("");
  };
  let copyList = [...todoList];

  const doneTask = (isCheck, index) => {
    const checkIndex = todoList?.findIndex((data, i) => i === index);

    copyList[checkIndex].isDone = isCheck ? true : false;
    setTodoList([...copyList]);
    // return todoList[checkIndex].isDone === true
  };

  return (
    <View
      style={{
        padding: 20,
        width: "400px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {todoList?.map((data, i) => {
        const { isDone, title } = data;
        return (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <CheckBox
              value={isDone}
              onValueChange={(checked) => doneTask(checked, i)}
              style={{ marginRight: "5px" }}
            />
            <Text
              style={{
                textDecoration: isDone && "line-through",
                color: isDone && "gray",
              }}
            >
              {title}
            </Text>
          </View>
        );
      })}

      <TextInput
        style={{ height: 40, border: "1px solid black" }}
        placeholder="Type here to add!"
        onChangeText={(newText) => setTextInput(newText)}
        value={textInput}
        // defaultValue={todoList}
      />

      <Button
        onPress={addInTodoList}
        title="Add todo"
        color="#841584"
        style={{ width: "120px" }}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
