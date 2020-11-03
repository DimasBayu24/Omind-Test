import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native'
import Round from '../../components/round'
import Box from '../../components/box'


const Home = () => {
    return (
        <View style={styles.background}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../../assets/backgroundHome.png')} >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ width: '100%', }}
                    horizontal={false}>
                    <View style={styles.header}>
                        <View
                            style={styles.profilePic}
                        >
                            <Image style={styles.image}
                                source={require('../../../assets/blank-profile.png')}
                            />
                        </View>
                        <Image style={styles.profilePic}
                            source={require('../../../assets/bell.png')}
                        />
                    </View>


                    <Text>Semua Orang Dapat Bernyanyi</Text>
                    <Text>DAFTAR</Text>
                    <View
                        style={styles.menu}>
                        <Round text='Music' />
                        <Round text='Stage Act' />
                        <Round text='Role Model' />
                        <Round text='Vocal' />


                    </View>
                    <View style={styles.headerTitle}>
                        <Text>NEWS FEED</Text>
                        <Text>View All</Text>
                    </View>
                    <View style={styles.menuBox}>
                        <Box text='5 Alasan Belajar Teknik Vokal' />
                        <Box text='Jangan Lupa Teknik Bernyanyi Ini' />
                    </View>
                    <View style={styles.menuCoupon}>
                        <View style={styles.coupon}>
                            <Text>Limited Offerings</Text>
                            <Text>20%</Text>
                        </View>
                        <View>
                            <Text>Details</Text>
                        </View>
                    </View>
                    <Text>Layanan Kami</Text>
                    <View style={styles.menu}>
                        <Text>Box Kupon</Text>
                        <Text>Box Kupon</Text>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text>Top Instruktur</Text>
                        <Text>View All</Text>
                    </View>
                    <View style={styles.menu}>
                        <Text>Bulat</Text>
                        <Text>Bulat</Text>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text>Events</Text>
                        <Text>View All</Text>
                    </View>
                    <View style={styles.menu}>
                        <Text>Box</Text>
                        <Text>Box</Text>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text>Testimoni</Text>
                        <Text>View All</Text>
                    </View>
                    <View style={styles.menu}>
                        <Text>Box</Text>
                        <Text>Box</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View >
    )
}

export default Home;

const styles = StyleSheet.create({
    font: {
        fontSize: 40,
        color: 'blue',
    },
    background: {
        backgroundColor: 'grey',
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#4D2A86',
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30,
    },
    headerTitle: {
        flexDirection: 'row',
        height: '7%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    profilePic: {
        marginHorizontal: '10%',
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: 25,
    },
    scrollStyle: {
        flex: 1,
        // height: '50%',
    },
    menu: {
        width: '80%',
        marginHorizontal: '10%',
        flexDirection: "row",
        backgroundColor: 'white',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
    },
    menuBox: {
        width: '98%',
        marginHorizontal: '1%',
        flexDirection: "row",
        backgroundColor: 'white',
        height: 190,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
    },
    menuCoupon: {
        width: '96%',
        marginVertical: '8%',
        marginHorizontal: '2%',
        flexDirection: "row",
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 360,
    },

})