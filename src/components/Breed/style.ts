import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  breed:{
    width: "100%",
    marginTop:20,
    borderRadius:20,
    borderWidth:1,
    borderColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height:100,
    padding:15,
    resizeMode: 'cover'
  },
  title:{
    fontFamily: "Poppins_500Medium",    
    fontSize:15,
    color:'#3048EA',
  },
  icon: { 
    color: "#F5F5F5",
    position: "absolute",
    transform: [{rotate: '-40deg'}],
    left: '75%',
    width:150,
    height:150,
    resizeMode: 'contain'
  },
  image:{
    width:70,
    height:70,
    borderRadius:35,
    borderColor: '#ff564f',
    borderWidth: 2,
    padding:16,
    position: "absolute",
    left: 25,
  }
});
