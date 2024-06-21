import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.accessText}>Bem-vindo ao CashCoach</Text>
       
        <View style={styles.Texto}>
        <Text style={styles.TextoText}>Sua fonte confiável de orientação financeira e educação sobre dinheiro!
        </Text>
      </View>
      <View style={styles.Lucas}>
        <Text style={styles.LucasText}> NOSSO OBJETIVO:
        </Text>
      </View>
      <View style={styles.Bruno}>
        <Text style={styles.BrunoText}>Nosso objetivo é fornecer ferramentas práticas, recursos educacionais e orientação personalizada para te ajudar.
        </Text>
      </View>

      <View style={styles.Bruno}>
        <Text style={styles.BrunoText}> A conquistar seus objetivos financeiros, seja economizar para a aposentadoria, comprae uma casa, 
        pagar dívidas ou investir para o futuro.
        </Text>
      </View>

      <View style={styles.Rapido}>
        <Text style={styles.RapidoText}> “Nada é impossivel se você acreditar que é possivel”.
        </Text>
      </View>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>O nosso foco, é a satisfação do cliente!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
    
  },
  content: {
    backgroundColor: '#ffff5d',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  accessText: {
    fontSize: 20,
    color: '#250ff3',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  footer: {
    backgroundColor: '#371AE5',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 10, 
  },
  footerText: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
   fontSize: 20,
   flexWrap: 'nowrap',
  },
  Texto: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingEnd: 30,
  },
  TextoText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 20
  },
  Lucas: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingEnd: 30,
  },
  LucasText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 20,
    textAlign: 'center'
  },

  Bruno: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingEnd: 30,
    margin: 10
  },
  BrunoText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 20,
    textAlign: 'center'
  },

  Rapido: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingEnd: 30,
    margin: 60
  },
  RapidoText: {
    fontSize: 20,
    color: '#A07FEB',
    fontWeight: 'bold',
    paddingLeft: 20,
    textAlign: 'center'
  },
});
