import { StyleSheet } from "react-native"
import colors from "../../contains/colors";
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background,
        alignItems:'center',
        justifyContent:'center'
    },
    body:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:18,
    },
    header:{
        fonSize:50,
        color: colors.primary,
        fontWeight:'bold',
    },
    items: {
        marginTop: 25,
    },
    item:{
        flexDirection:'row',
        backgroundColor: colors.white,
        marginBottom:15,
        paddingVertical:10  ,
        paddingHorizontal:20,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'space-between',
    },
    square:{
        width:48,
        height:36,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    even: {
        backgroundColor:  colors.second,

    },
    odd : {
        backgroundColor:  colors.green,

    },
    number: {
        fontWeight : 16,
        fontWeight : '700',
        color :  colors.white
    },
    content : {
        width : '80%',
        fonSize:16,
    }
})

   export default styles;