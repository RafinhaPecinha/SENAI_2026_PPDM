import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from "./components/Header";
import tarefas from "./dados/tarefas";


function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} resizeMode="cover"/>
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='Sesi Produtividade'/>
      <FlatList 
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff1'
  },

  card:{
    backgroundColor:'#fff',
    marginHorizontal:15,
    marginVertical:10,
    borderRadius:20,
    padding:15,
    elevation:6
  },

  foto:{
    width:'100%',
    height:220,
    borderRadius:15
  },

  titulo:{
    fontSize:22,
    fontWeight:'bold',
    color:'#222',
    marginTop:10
  },

  status:{
    marginTop:8,
    alignSelf:'flex-start',
    backgroundColor:'#ec51ef',
    color:'#fff',
    paddingHorizontal:12,
    paddingVertical:5,
    borderRadius:20,
    fontWeight:'bold',
    overflow:'hidden'
  },

  desc:{
    marginTop:10,
    fontSize:15,
    color:'#666',
    lineHeight:22
  }
})