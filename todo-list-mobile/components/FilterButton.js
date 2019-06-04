import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

class FilterButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} style={styles.container}>
                <View style={styles.content}>
                    <Ionicons name={this.props.name} size={25} style={this.props.active ? styles.active : styles.unactive} />
                    <Text style={[styles.text, this.props.active ? styles.active : styles.unactive]}>{this.props.children}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter == state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 33.33,
        flexDirection: 'column',
        backgroundColor: '#eaeaea'
    },
    text: {
        fontSize: 12,
    },
    active: {
        color: 'orange',
    },
    unactive: {
        color: 'gray',
    },
    content: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
});