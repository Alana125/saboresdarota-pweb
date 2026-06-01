import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Entrada() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/saboresdarota.png')}
        style={styles.splash}
        resizeMode="contain"
      />

      <Image
        source={require('../../assets/iconsabores.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo!</Text>

      <Text style={styles.subtitle}>
        Entre ou crie sua conta para explorar os melhores sabores da rota.
      </Text>

      <Pressable
        style={styles.button1}
        onPress={() => router.push('/entrada_login')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable
        style={styles.button2}
        onPress={() => router.push('/opcao_cadastro')}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },

  splash: {
    width: 250,
    height: 180,
    marginBottom: 10,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },

  button1: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#FF7A00',
    marginBottom: 12,
    width: 200,
    alignItems: 'center',
  },

  button2: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#FFA64D',
    width: 200,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});