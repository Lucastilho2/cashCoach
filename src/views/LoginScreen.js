import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Confira os produtos e serviços inovadores</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.accessText}>Acessar sua conta</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número da Conta:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o número da conta"
          />
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a senha"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate('SeuNegocio')} }>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.Texto}>
        <Text style={styles.TextoText}>Com o CashCoach sua resposta vem em menos de 1 minuto</Text>
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
  },
  header: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#A383E7',
    fontWeight: 'bold',
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
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A383E7',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
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
    color: '#A383E7',
    fontWeight: 'bold',
    paddingLeft: 20
  },
});
