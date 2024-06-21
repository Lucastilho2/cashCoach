import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function CadastrarScreen(props) {
  const handleLoginPress = () => {
    // Aqui você pode adicionar lógica para lidar com o login
    // Por exemplo: validar campos, autenticar usuário, etc.
    // No exemplo abaixo, apenas navegamos para a tela 'Home'.
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.accessText}>Cadastre-se</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome:"
          />
          <Text style={styles.label}>Celular:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu número:"
          />
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail:"
          />
          <Text style={styles.label}>Confirmação de e-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme seu e-mail:"
          />
          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF:"
          />
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input2}
            placeholder="Digite sua senha:"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>cadastrar</Text>
        </TouchableOpacity>
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
  input2: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    width: '100%',
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
});
