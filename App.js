import React from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, StatusBar, TextInput, Dimensions } from 'react-native';
import ToDo from "./ToDo";
const {height, width} = Dimensions.get("window");

export default class App extends React.Component {
  state={
    newToDo:""
  };
  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Zosime To Do</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder={"Now To Do"} 
            value={newToDo} 
            onChangeText={this._controllNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo />
            <ToDo />
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }
  _controllNewToDo = text => {
    this.setState({
      newToDo:text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color:"white",
    fontSize:30,
    marginTop:50,
    fontWeight:"500",
    marginBottom:30
  },
  card:{
    backgroundColor:"white",
    flex:1,
    width:width-40,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50,50,50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android:{
        elevation:3
      }
    })
  },
  input:{
    padding:20,
    borderBottomColor:"#bbb",
    borderBottomWidth:1,
    fontSize:26
  },
  toDos:{
    alignItems:"center"
  }
});
