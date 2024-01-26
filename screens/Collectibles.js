import React, {Component} from "react";
import {Text, View} from "react-native";

export default class CollectiblesScreen extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Tela dos Colecionáveis</Text>
            </View>
        )
    }
}