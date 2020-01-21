import React,{Component} from"react";
import{Text,View,StatusBar,Button} from "react-native";
import style from "./style"
import MapView from 'react-native-daummap';

export default class index extends Component{
    
    render(){
        return (
            <View style={style.container}>
                <MapView
                    initialRegion={{
                        latitude: 36.143099,
                        longitude: 128.392905,
                        zoomLevel: 5,
                    }}
                    mapType={"Standard"}
                    style={{ width: 300, height: 300, }}
                />
            </View>
        )   
    }
}
    
