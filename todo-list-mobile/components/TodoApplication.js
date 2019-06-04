import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import AddTodoItem from './AddTodoItem'
import TodoList from './TodoList'
import Footer from './Footer'

class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodoItem />
                <TodoList />
                <Footer />
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 30,
        backgroundColor: '#fff'
    }
});