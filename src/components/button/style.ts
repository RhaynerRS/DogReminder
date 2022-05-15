import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        borderRadius:15,
    },
    gradient:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 65,
        backgroundColor: '#C0E7BA',
        borderRadius:15,
        borderColor: '#fff',
        flexDirection: 'row',
        shadowColor: '#171717',
        shadowOffset: {width: 6, height: 6},
        shadowOpacity: 0.25,
        shadowRadius: 7,
        marginTop:15,
        marginBottom:15,
    },

    title: {
        fontFamily:'Poppins_700Bold',
        flex:1,
        fontWeight: '700',
        color: '#fff',
        fontSize:18,
        textAlign: 'center',
    }
})