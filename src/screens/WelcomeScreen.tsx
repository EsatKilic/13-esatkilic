import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet ,Image, Pressable} from 'react-native';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../services/firebase";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage, setImageUrl } from '../actions/actions';
import { RootState } from '../store/storeTypes';


const WelcomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state: RootState) => state.storage.imageUrl);

  useEffect(() => {
    // Image'ı Redux'tan getir
    fetchImage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width: 400, height: 800, position: "absolute" }}
      />
      <Text style={styles.title}>Hoşgeldin</Text>
      <View style={styles.middleContainer}>
        <Text style={styles.title2}>Ne zaman istersen, Hopi'nin renkli ve kazançlı dünyasına dönebilirsin.</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('EmailLogin')}>
        <Text style={{ color: 'white' }}>Giriş Yap</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: '5%',
    color: '#FF69B4',
  },
  middleContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: '50%',
    marginTop: -30, // title2'nin yüksekliği kadar geri çek
  },
  title2: {
    color: 'black',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#FF1493',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, // Ekranın altında
  },
});

export default WelcomeScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet ,Image, Pressable} from 'react-native';
// import { getDownloadURL, ref } from "firebase/storage";
// import { storage } from "../services/firebase";
// import { SafeAreaView } from 'react-native-safe-area-context';


// const WelcomeScreen = ({ navigation }) => {
//   const [imageUrl, setImageUrl] = useState(null);
//   const profileImgRef = ref(storage, "gs://hopi-3d3d5.appspot.com/bg/arkaplan12.jpg");

//   useEffect(() => {
//     getDownloadURL(profileImgRef).then((url) => {
//       setImageUrl(url);
//     });
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//         source={{
//           uri: imageUrl,
//         }}
//         style={{ width: 400, height: 800, position: "absolute" }}
//       />
//       <Text style={styles.title}>Hoşgeldin</Text>
//       <View style={styles.middleContainer}>
//         <Text style={styles.title2}>Ne zaman istersen, Hopi'nin renkli ve kazançlı dünyasına dönebilirsin.</Text>
//       </View>
//       <Pressable style={styles.button} onPress={() => navigation.navigate('EmailLogin')}>
//         <Text style={{ color: 'white' }}>Giriş Yap</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     position: 'absolute',
//     top: '5%',
//     color: '#FF69B4',
//   },
//   middleContainer: {
//     position: 'absolute',
//     alignItems: 'center',
//     width: '100%',
//     top: '50%',
//     marginTop: -30, // title2'nin yüksekliği kadar geri çek
//   },
//   title2: {
//     color: 'black',
//     marginBottom: 20,
//   },
//   button: {
//     width: '80%',
//     backgroundColor: '#FF1493',
//     color: 'white',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 20, // Ekranın altında
//   },
// });

// export default WelcomeScreen;
