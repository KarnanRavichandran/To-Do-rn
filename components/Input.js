import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Input = ({ isAddMode, setIsAddMode, addItems }) => {
    const [item, setItem] = useState('');

    return (
        <Modal visible={isAddMode} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='New Item'
                    style={styles.input}
                    onChangeText={text => setItem(text)}
                    value={item}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add' onPress={() => {
                            addItems(item)
                            setItem('');
                            setIsAddMode(false);
                        }} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color={'red'} onPress={() => setIsAddMode(false)} />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {

    }

})