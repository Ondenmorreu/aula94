import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground
                        source={require('../assets/bgImg.jpg')}
                        style={styles.backgroundImage}>
                        <TouchableOpacity
                            style={styles.routeCard}
                            onPress={() => this.props.navigation.navigate("CheatCodes")}>
                                <Text style={styles.routeText}>Códigos de Trapaça</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.routeCard}
                            onPress={() => this.props.navigation.navigate("Collectibles")}>
                            <Text style={styles.routeText}>Colecionáveis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.routeCard}
                            onPress={() => this.props.navigation.navigate("Map")}>
                            <Text style={styles.routeText}>Mapa(Locais)</Text>
                        </TouchableOpacity>
                    </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",
    },
    titleBar:{
        flex: 0.15,
        justifyContent:"center",
        alignItems: "center",
    },
    titleText:{
        fontSize: 40,
        fontWeight: "bold",
        color:"white",
    },
    routeText:{
        fontSize: 25,
        fontWeight:'bold',
        marginTop: 15,
        paddingLeft: 30,
        textAlign: 'center',
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80,
    },
    routeCard:{
        flex:0.15,
        marginLeft:50,
        marginRight:50,
        marginTop:100,
        borderRadius:10,
        backGroundColor:'#fff',
        borderWidth:3,
    },
})