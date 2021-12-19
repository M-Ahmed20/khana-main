import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
import { style } from "styled-system";
import Logo from '../../assets/LogoKhanaSabkliye.png'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { GlobalContext } from '../configs/context'
import findNearestLocation from 'map-nearest-location';



export default function ApplyForFood() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const { state } = useContext(GlobalContext)
    let foodBanks = state.foodBanks;

    function nearestFoodBank() {
        console.log("Nearest Food Bank")
    }



    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location)
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
        console.log(text)
    } else if (location) {
        text = JSON.stringify(location);
        console.log(text)
    }


    return (
        <ScrollView>
        <View style={styles.container}>
            <Image source={Logo} style={{ width: 120, height: 120 }} />
            <Text style={styles.mainHeading}>Apply For Food</Text>
            
            
            {location ?
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    minZoomLevel={10}
                    maxZoomLevel={15}
                >
                     {
                        foodBanks.map((e) => {
                            return (
                                <Marker key={e.branch_name}
                                    coordinate={{
                                        latitude: e.latitude,
                                        longitude: e.longitude,
                                    }}
                                    title={e.branch_name}
                                />
                            )
                        })
                    } 
                </MapView>
                : null}



            <TouchableOpacity style={styles.FoodBankBtn} onPress={() => {
                nearestFoodBank();
            }}>
                <Text style={styles.loginText}>Get Nearest Food Bank</Text>
            </TouchableOpacity>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Nearest Food Bank"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setName(email)}
                // value="Raheel"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setName(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Father Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setFatherName(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="CNIC Number"
                    keyboardType="numeric"
                    maxLength={16}
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setNicNumber(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Number of Family Members"
                    keyboardType="numeric"
                    maxLength={2}
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setFamilyMembers(email)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Submit Application</Text>
            </TouchableOpacity>



        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 20,
        // justifyContent: "center",
    },
    inputView: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        marginBottom: 20,
        // alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 10,
    },
    new_user: {
        height: 30,
        marginTop: 10,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#89C343",
    },
    FoodBankBtn: {
        width: "50%",
        borderRadius: 5,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        backgroundColor: "#89C343",
        marginBottom: 8,
    },
    loginText: {
        color: "#fff",
        fontWeight: "bold",

    },
    mainHeading: {
        fontWeight: 'bold',
        color: '#89C343',
        fontSize: 20
    },
    map: {
        width: Dimensions.get('window').width - 10,
        height: 200,
        marginTop: 15,
        marginBottom: 15,
    },
});