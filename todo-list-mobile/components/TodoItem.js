import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

class TodoItem extends Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.completed ? '#bef2e5aa' : '#ff7889aa' }]}>
                <TouchableOpacity onPress={() => { this.props.onToggleClick(); }} style={styles.textTouchable}>
                    <Text style={[styles.text, { textDecorationLine: this.props.completed ? 'line-through' : 'none' }]}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.onDeleteClick(); }} style={styles.iconTouchable}>
                    <View style={styles.iconView}>
                        <Ionicons name="md-trash" size={30} style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#f2f2e1'
    },
    textTouchable: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        padding: 5,
        height: 'auto',
        textAlign: 'left',
        fontSize: 16,
    },
    iconTouchable: {
        justifyContent: 'center'
    },
    iconView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#000b',
        padding: 10
    }
});