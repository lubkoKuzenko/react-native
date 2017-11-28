import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    height: 40, 
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    position: 'relative'
  },
  header: {    
    color: 'black',
    textAlign: 'center'
  }
});