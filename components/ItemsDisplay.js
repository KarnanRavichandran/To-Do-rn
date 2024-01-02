import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ItemsDisplay = ({ items,handleDelete }) => {
  return (
    <FlatList contentContainerStyle={{paddingBottom:30}}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item.value}</Text>
          <TouchableOpacity style={styles.button}  onPress={() => handleDelete(item.id)}>
            <Text style={styles.buttonText} >Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ItemsDisplay;

const styles = StyleSheet.create({
    listItem:{
    padding:10,
    margin:12,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderRadius:8,
    borderWidth:1,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'

    },
    button:{
     backgroundColor:'red',
     paddingHorizontal:10,
     paddingVertical:10,
   borderRadius:5
    },
    buttonText:{
         color:'white'
    }
});