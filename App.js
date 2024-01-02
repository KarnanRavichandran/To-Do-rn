import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Input from './components/Input';
import ItemsDisplay from './components/ItemsDisplay';

const App = () => {
    const [items, setItems] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false)

    const addItems = (item) => {
        if (item.length === 0) {
          return;
        }
        setItems(currItems=>{
            return[
                ...currItems,
                {
                    id:Math.random().toString(),value:item
                }
            ]
        })
        setIsAddMode(false);
      };

      const handleDelete = (itemId) => {
        setItems((currItems) => currItems.filter((item) => item.id !== itemId));
      };
      
    console.log(items)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To Do List</Text>
            <Button title="Click" onPress={() => setIsAddMode(true)} />
            <Input isAddMode={isAddMode} setIsAddMode = {setIsAddMode}  addItems={addItems}  />
            <ItemsDisplay items = {items}  handleDelete= {handleDelete} />
        </View>
    );
};


export default App;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 0
    },
    title: {
        fontSize: 30,
        color: "black",
        textAlign: 'center',
        paddingVertical: 20,
    }
});
