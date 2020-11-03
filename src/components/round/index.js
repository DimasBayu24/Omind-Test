import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


class Round extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default Round

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: "center",
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
    }
})
