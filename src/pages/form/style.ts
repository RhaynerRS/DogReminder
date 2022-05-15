import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    title:{
        fontSize:40,
        fontFamily: 'Helvetica',
        textAlign: 'center'
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text:{
        textAlign: 'left'
    },
    buttons:{
        width:'100%',
        textAlign: 'center',
        alignItems: 'center',
    },
    inline:{
        marginTop:8,
        flexDirection:'row',
        textAlign: 'center',
        justifyContent: 'center'
    }
})