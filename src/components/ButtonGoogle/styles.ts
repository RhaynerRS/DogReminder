import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height:55,
        backgroundColor: '#fff',
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#000',
        shadowColor: '#171717',
        shadowOffset: {width: 6, height: 6},
        shadowOpacity: 0.25,
        shadowRadius: 7,
        marginTop:15,
        marginBottom:15,
    },
    title: {
        fontFamily:'Helvetica',
        flex:1,
        color: '#000',
        fontWeight:'bold',
        fontSize:15,
        textAlign: 'center',
    },
    iconWrapper: {
        width:56,
        height:56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:35,
        height:35,
    }
})