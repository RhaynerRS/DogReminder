import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        width:200,
        height:200,
        justifyContent:'center',
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:25,
        marginRight:0,        
    },
    content:{
        width:185,
        height:185,
        borderRadius:8,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:7
    },
    breed:{
        fontFamily:'Poppins_400Regular',    
        fontSize:12,
        fontWeight: '200',
        color:'#3048EA',
    },
    title:{
        fontFamily: "Poppins_500Medium",    
        fontSize:15,
        color:'#3048EA',
    },
    data:{
        justifyContent:'center',
        alignItems:'center',
    },
    check:{
        width:10,
        height:10,
        backgroundColor:"#fff",
        alignSelf:"flex-end",
        marginRight:7,
        borderBottomColor:'#243189',
        borderWidth:2,
        borderRadius:3,
    },
    checked:{
        width:10,
        height:10,
        backgroundColor:'#E51C44',
        alignSelf:"flex-end",
        marginRight:7,
        borderRadius:3,
    },
    dog:{
        width:120,
        height:115,
        transform: [{ translateY:8}]
    },
    cat:{
        width:120,
        height:80,
        transform: [{ translateY:55}]
    }
})