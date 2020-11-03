import React, { Component } from 'react'

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


class Detail extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Image
                    style={{ position: 'absolute' }}
                    source={require('../../../assets/Rectangle-382.png')} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 25,
                    alignItems: 'center'
                }}>
                    <Image
                        source={require('../../../assets/Vector(9).png')}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Kelas Instruktur Reguler</Text>
                    <View></View>
                </View>
                <View style={{ backgroundColor: 'white', marginTop: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <Text style={styles.textTitle}>DESKRIPSI</Text>
                    <Text style={styles.textDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero orci, enim nibh sit urna nulla lorem eget mauris. Sem maecenas tristique vitae mattis. Erat egestas rutrum pulvinar sagittis. Diam mattis est eget etiam arcu ultrices ultricies convallis.</Text>
                    <Text style={styles.textTitle}>Metode Pembelajaran</Text>
                    <View style={{ flexDirection: 'row', width: 130, justifyContent: 'space-between', marginLeft: 17 }}>
                        <Text style={{ padding: 5, backgroundColor: '#F4F4F4', borderRadius: 15, color: '#939393' }}>Online</Text>
                        <Text style={{ padding: 5, backgroundColor: '#F4F4F4', borderRadius: 15, color: '#939393' }}>Offline</Text>
                    </View>
                    <Text style={styles.textTitle}>BIAYA KURSUS</Text>
                    <Text style={{ color: '#EFB867', marginLeft: 17, fontSize: 20, }}>IDR 2.600.000,-<Text style={styles.textDesc}>/Session</Text></Text>
                    <TouchableOpacity style={{ marginHorizontal: 30, marginTop: 20, backgroundColor: '#6253A8', paddingHorizontal: 100, paddingVertical: 15, borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Daftar Kursus Musik</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Detail

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,

    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 17
    },
    textDesc: {
        marginHorizontal: 17,
        color: '#A4A4A4',
        fontWeight: '400',
    }
})
