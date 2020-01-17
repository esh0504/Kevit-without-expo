import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Dsboard from "../Screen/Dsboard/index";
import Showmap from "../Screen/Showmap/index"

const AppNavigator=createStackNavigator({

    Dsboard:{
        screen:Dsboard,
    },
    Showmap:{
        screen:Showmap,
    },
},
{
    initialRouteName: "Dsboard",
});

export default createAppContainer(AppNavigator);