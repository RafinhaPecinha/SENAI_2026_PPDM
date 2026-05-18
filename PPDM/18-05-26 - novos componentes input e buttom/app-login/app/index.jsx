import { useState } from "react"
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Logo from '../assets/logo.jpg'

export default function Index(){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function Login(){
    console.log('Dados do login')
    console.log(email, senha)
  }
  
  return (
    <ScrollView>
      <Image
      source={Logo}
      resizeMode="contain"
      />
      <Text style={estilos.titulo}>Login</Text>
      <Text style={estilos.subtitulo}>Para prosseguir insira seus dados</Text>
    </ScrollView>
)
}

const estilos = StyleSheet.create ({

})