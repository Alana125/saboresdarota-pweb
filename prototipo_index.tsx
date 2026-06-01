import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ImageBackground, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <Pressable style={styles.container} onPress={() => router.push('/entrada')}>
       <ImageBackground
        source={require('../../assets/splash.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.center}>
          <Image
            source={require('../../assets/iconsabores.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground> 
      <StatusBar style="light" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
});
