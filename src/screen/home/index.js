import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native'


const Home = () => {
    return (
        <View style={styles.background}>
            <Image
                style={{ position: 'absolute' }}
                source={require('../../../assets/Rectangle-238.png')} />
            <Image
                style={{ position: 'absolute' }}
                source={require('../../../assets/Rectangle-402.png')} />
            <Image
                style={{ position: 'absolute', marginTop: 175, marginLeft: 280 }}
                source={require('../../../assets/Rectangle-403.png')} />
            <Image
                style={{ position: 'absolute', marginTop: 50, marginLeft: 170 }}
                source={require('../../../assets/man-singing-png-5-1.png')} />

            <View style={styles.header}>
                <View
                    style={styles.profilePic}
                >
                    <Image style={styles.image}
                        source={require('../../../assets/Ellipse-25.png')}
                    />
                </View>
                <Image style={styles.bell}
                    source={require('../../../assets/Vector.png')}
                />
            </View>


            <Image style={{ marginLeft: 55, marginTop: 12 }}
                source={require('../../../assets/text-1.png')}
            />
            <View style={styles.boxDaftar}>
                <Text style={{ color: 'white', fontSize: 16 }}>DAFTAR</Text>
            </View>
            <View style={{ marginLeft: 60, marginTop: 22, flexDirection: 'row' }}>
                <Image
                    source={require('../../../assets/Ellipse-26.png')}
                />
                <Image style={{ marginLeft: 10 }}
                    source={require('../../../assets/Ellipse-27.png')}
                />
                <Image style={{ marginLeft: 10 }}
                    source={require('../../../assets/Ellipse-27.png')}
                />
            </View>
            <View
                style={styles.menu}>
                <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 20, color: '#606060' }}>Kategori</Text>
                <View style={styles.menuCategory}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Group-500.png')}
                            />
                        </View>
                        <Text>Music</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/XMLID-113.png')}
                            />
                        </View>
                        <Text>Stage Act</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image style={{ marginLeft: 7.5 }}
                                source={require('../../../assets/Vector-10.png')}
                            />
                        </View>
                        <Text>Role Model</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Group.png')}
                            />
                        </View>
                        <Text>Vocal</Text>
                    </View>
                </View>


            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ width: '100%' }}
                horizontal={false}>
                <View style={styles.headerTitle}>
                    <Text style={styles.textTitle}>NEWS FEED</Text>
                    <Text style={styles.textViewAll}>View All</Text>
                </View>
                <View style={styles.menuBox}>
                    <View style={styles.containerNews}>
                        <ImageBackground
                            source={require('../../../assets/Rectangle-241.png')}
                            style={{ width: 175, height: 150, borderRadius: 10 }}>
                            <Text style={styles.textNews}>5 Alasan Belajar Teknik Vokal</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.containerNews}>
                        <ImageBackground
                            source={require('../../../assets/Rectangle-242.png')}
                            style={{ width: 175, height: 150, borderRadius: 10 }}>
                            <Text style={styles.textNews}>Jangan Lupa Teknik Bernyanyi Ini</Text>
                        </ImageBackground>
                    </View>
                </View>
                <ImageBackground source={require('../../../assets/Subtract.png')}
                    style={{ width: '100%', height: 110 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 15,
                        alignItems: 'center'
                    }}>
                        <View >
                            <Text style={{ color: 'white', height: 40 }}>Limited Offerings             <Image
                                source={require('../../../assets/Path-173.png')}
                            /></Text>
                            <Text style={{ color: 'white' }}>20% off</Text>
                        </View>
                        <Text style={{
                            color: 'white',
                            borderWidth: 1,
                            borderColor: 'white',
                            padding: 5,
                            borderRadius: 5,
                        }}>Detail</Text>
                    </View>
                </ImageBackground>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#606060',
                    marginLeft: '5%',
                    paddingBottom: 30,
                }}>Layanan Kami</Text>
                <View style={styles.menuCategory}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Group-1.png')}
                            />
                        </View>
                        <Text>Artist</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Group-1.png')}
                            />
                        </View>
                        <Text>Video</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Group-2.png')}
                                style={{ marginLeft: 5, marginTop: 5 }}
                            />
                        </View>
                        <Text>Audio</Text>
                    </View>
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.textTitle}>Top Instruktur</Text>
                    <Text style={styles.textViewAll}>View All</Text>
                </View>
                <View style={styles.menuCategory}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Ellipse-449.png')}
                            />
                        </View>
                        <Text style={{ marginTop: 10 }}>Yohanes</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Ellipse-450.png')}
                            />
                        </View>
                        <Text style={{ marginTop: 10 }}>Albert</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Ellipse-451.png')}
                            />
                        </View>
                        <Text style={{ marginTop: 10 }}>Agnes</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Ellipse-452.png')}
                            />
                        </View>
                        <Text style={{ marginTop: 10 }}>Jessica</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../../../assets/Ellipse-453.png')}
                            />
                        </View>
                        <Text style={{ marginTop: 10 }}>Deny</Text>
                    </View>
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.textTitle}>Events</Text>
                    <Text style={styles.textViewAll}>View All</Text>
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuBox}>
                        <View style={styles.containerNews}>
                            <ImageBackground
                                source={require('../../../assets/Rectangle-246.png')}
                                style={{ width: 195, height: 150, borderRadius: 10 }}>
                                <Text style={styles.textNews}>Seminar Vokal Group</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.containerNews}>
                            <ImageBackground
                                source={require('../../../assets/Rectangle-247.png')}
                                style={{ width: 175, height: 150, borderRadius: 10 }}>
                                <Text style={styles.textNews}>Diskusi Mixer dll</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.textTitle}>Testimoni</Text>
                    <Text style={styles.textViewAll}>View All</Text>
                </View>
                <View style={styles.menu}>
                    <Text>Box</Text>
                    <Text>Box</Text>
                </View>
            </ScrollView>
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
        backgroundColor: 'white',
        flex: 1,

    },
    header: {
        flexDirection: 'row',
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
        marginHorizontal: '5%',
    },
    profilePic: {
        marginHorizontal: '10%',
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    bell: {
        marginHorizontal: '10%',
        width: 22,
        height: 26,
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
        marginTop: 22,
        backgroundColor: 'white',
        height: 126,
        justifyContent: 'space-around',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    menuCategory: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20,
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
    boxDaftar: {
        width: 110,
        height: 35,
        borderBottomLeftRadius: 17.5,
        borderBottomRightRadius: 17.5,
        borderTopLeftRadius: 17.5,
        borderTopRightRadius: 17.5,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 58.46,
        marginTop: 22,
    },
    categoryContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFDC5F',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#606060',
    },
    textViewAll: {
        color: '#6253A8',
        fontSize: 14,
    },
    containerNews: {
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
    textNews: {
        marginTop: 105,
        marginHorizontal: 20,
        color: 'white',
        fontWeight: 'bold',
    },

})