import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import FilterButton from './FilterButton'
import { VISIBILITY_FILTERS } from '../actions/actionTypes'

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FilterButton filter={VISIBILITY_FILTERS.SHOW_ACTIVE} name={'md-notifications'}>Active</FilterButton>
                <FilterButton filter={VISIBILITY_FILTERS.SHOW_COMPLETED} name={'md-checkbox-outline'}>completed</FilterButton>
                <FilterButton filter={VISIBILITY_FILTERS.SHOW_ALL} name={'md-list'}>All</FilterButton>
            </View>
        );
    }
}

export default connect()(Footer);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#f2f2e1',
        borderWidth: 1,
        height: 50,
        alignItems: 'center',
    },
});