import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const topics = [
  'Consultoria Empresarial',
  'Marketing Digital',
  'Desenvolvimento Web',
  'Treinamento Empresarial',
  'Experiência',
  'Compromisso',
  'Personalização'
];

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.Texto}>
          <Text style={styles.TextoText}>
            Na "Seu Negócio", estamos comprometidos em ajudar empreendedores como você a alcançar o sucesso.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NOSSO SERVIÇO:</Text>
          {topics.map((topic, index) => (
            <View key={index} style={styles.serviceItem}>
              <Text style={styles.serviceText}>{topic}</Text>
            </View>
          ))}
        </View>

        <View style={styles.Lucas8}>
          <Text style={styles.Lucas8Text}>Esse é um pequeno passo para você, mas um gigantesco salto para a humanidade</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>O nosso foco é a satisfação do cliente!</Text>
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
  Texto: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  TextoText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 20,
    textAlign: 'center'
  },
  section: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 18,
    color: '#000000',
  },
  Lucas8: {
    width: '100%',
    height: 120,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 130,
    paddingHorizontal: 20,
  },
  Lucas8Text: {
    fontSize: 20,
    color: '#000000',
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
  },
  footerText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    margin:20
  },
});
