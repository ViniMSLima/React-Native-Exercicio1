import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Usuarios(props)
{
    return (
        <View style={styles.container}>
        
            <Text style={styles.bigText}>Usuarios</Text>
            <View style={{width: "300px", height:"200px", borderRadius: "10px", borderStyle: "dashed", borderWidth: "2px"}}>
                <Text style={{marginBottom: "5px", marginLeft: "5px", marginTop:"5px"}}>Nome:</Text>
                <Text style={{marginBottom: "5px", marginLeft: "5px"}}>Idade:</Text>
                <Text style={{marginBottom: "5px", marginLeft: "5px"}}>Sexo:</Text>
                <Text style={{marginBottom: "5px", marginLeft: "5px"}}>Receber Notificacao:</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      widht: 100,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textArea: {
      backgroundColor: 'white',
      color: 'white'
    },
    smallText: {
        alignContent:"flex-start",
        width: "200px"
    },
    inputs: {
        backgroundColor: "white",
        width: "200px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px",
        borderColor: "grey",
        borderWidth: "1px"
    },
    bigText: {
        fontSize: "42px",
        marginBottom: "50px"
    },
    TouchableOpacity: {
        width: "200px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px"
        
    }

});
