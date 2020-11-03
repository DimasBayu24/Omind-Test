import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


class Round extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
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
    box: {
        width: 180,
        height: 150,
        backgroundColor: 'red',
        justifyContent: "flex-end",
        borderRadius: 5,
    },
    text: {
        marginBottom: 3,
    }

})
