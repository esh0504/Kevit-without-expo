import React,{Component} from"react";
import{Text,View,StatusBar,Image,TouchableOpacity,Button} from "react-native";
import style from "./style"


export default class index extends Component{
    state={
        isLogin : false
      };
    render(){
        return (
        <View style={style.container}>
            <StatusBar barStyle="dark-content" />
            <View style={style.rcontainer}>
                <Button title={this.state.isLogin ? "Mypage":"Login Please"} style={style.button} />
                <TouchableOpacity style={style.SettingButton}>
                    <Image source={require('../../Image/settings.png')} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </View>
            <View style={style.rcontainer}>
                <Button title="아무거나 넣기" style={style.button}/>
            </View>
            <View style={style.rcontainer}>
                <Button style={style.button} title={"지도보기"} onPress={()=>this.props.navigation.navigate('Showmap')}/>
            </View>
            <Text style={style.text}> Kevit Electronic System </Text>
        </View>
        )   
    }
}
    
