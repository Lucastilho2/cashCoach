import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/home-work.jpg')} // Substitua pelo caminho da sua imagem
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Aprenda a investir e gerenciar seu negócio</Text>
        {/* Outros componentes e conteúdo da tela aqui */}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>O nosso foco é a satisfação do cliente!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir toda a área disponível
    justifyContent: "flex-start"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20, // Exemplo de espaçamento horizontal
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20, // Exemplo de espaçamento inferior
    paddingStart: 100,
    paddingTop: 100
  },
  footer: {
    backgroundColor: '#371AE5',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    margin: 10
  },
});
