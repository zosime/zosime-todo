import React, {Component} from "react";
import {Dimensions, View, Text, TouchableOpacity, StyleSheet} from "react-native";

const {width, height} = Dimensions.get("window");

export default class ToDo extends Component{
    state={
        isEditing:false,
        isCompleted:false
    };
    render(){
        const {isCompleted} = this.state; 
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={this._toggleComplete}>
                <View 
                    style={[
                        styles.circle,
                        isCompleted ? styles.completedCircle : styles.uncompletedCircle
                    ]}/>
            </TouchableOpacity>
            <Text style={styles.text}>"1234567890 1234567890 1234567890"</Text>
            </View>
        );
    };
    _toggleComplete=()=>{
        this.setState(prevState=>{
            return{
                isCompleted:!prevState.isCompleted
            }
        })
    }
}

const styles=StyleSheet.create({
    container:{
        width:width-50,
        borderBottomColor: "#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        fontWeight:"600",
        fontSize:20,
        marginVertical:20
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        borderColor:"red",
        borderWidth:3,
        marginLeft:10,
        marginRight:15
    },
    completedCircle:{
        borderColor:"#bbb"
    },
    uncompletedCircle:{
        borderColor:"#F23657"
    }

});