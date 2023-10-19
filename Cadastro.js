import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image, Switch} from "react-native";
import { useState } from 'react';

export default function Login(props)
{
    const [inicio, setInicio] = useState(false)

    return (
        <View style={styles.container}>
        
            <Image style={{width: "150px", height: "150px", borderRadius: "50%", marginBottom: "30px", marginTop: "30px"}} source={require("./img/1053244.png")}></Image>

            <Text style={styles.smallText}>Nome:</Text>
            <TextInput style={styles.inputs}
            ></TextInput>

            <View style={{justifyContent: "space-between", display: "flex", flexDirection: "row"}}>
                <View><Text>Idade:</Text>
                    <TextInput style={[styles.smallInput, {marginRight: "10px"}]}
                    ></TextInput>
                </View>
                <View>
                    <Text>Sexo:</Text>
                    <TextInput  style={styles.smallInput}
                    ></TextInput>
                </View>
            </View>

            <Text style={styles.smallText}>Email:</Text>
            <TextInput style={styles.inputs}
            ></TextInput>

            <Text style={styles.smallText}>Senha:</Text>
            <TextInput style={styles.inputs}
                secureTextEntry = {true}
            ></TextInput>

            <Text style={styles.smallText}>Confirmar senha:</Text>
            <TextInput style={styles.inputs}
                secureTextEntry = {true}
            ></TextInput>

            <View style={{width: "200px"}}>
                <Text style={styles.smallText}>Deseja receber notificacoes?</Text>
                <Switch style={{marginTop: "10px"}}
                        onValueChange={() => setInicio(!inicio)}
                        value={inicio}
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={inicio? "#f5dd4b":"#f4f3f4"}
                />
            </View>
            
            <TouchableOpacity style={[styles.TouchableOpacity, {backgroundColor: "white", color: "black"}]} 
            onPress={() => props.navigation.navigate("Login")}><Text>Cadastrar</Text></TouchableOpacity>

            <TouchableOpacity style={[styles.TouchableOpacity, {backgroundColor: "lightgrey", color: "white"}]}
            onPress={() => props.navigation.navigate("Login")}><Text>Cancelar</Text></TouchableOpacity>

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
        marginTop: "5px"
    },
    smallInput:{
        backgroundColor: "white",
        width: "95px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px"
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
