import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from './KampanyalarSlice';
import { RootState } from '../store/storeTypes';

const KampanyalarScreen = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state: RootState) => state.campaigns.campaigns);
  const isLoading = useSelector((state: RootState) => state.campaigns.loading);
  const error = useSelector((state: RootState) => state.campaigns.error);

  useEffect(() => {
    fetchCampaigns();
  }, [dispatch]);

  if (isLoading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View style={styles.container}><Text>Error: {error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.campaignItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.campaignImage}
            />
            <Text style={styles.campaignTitle}>{item.title}</Text>
            <Text style={styles.campaignSubtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  campaignItem: {
    marginBottom: 20,
  },
  campaignImage: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  campaignSubtitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default KampanyalarScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../services/firebase';

// const KampanyalarScreen = () => {
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const campaignsCollection = collection(db, 'campaigns');
//         const querySnapshot = await getDocs(campaignsCollection);

//         const campaignsList = [];
//         querySnapshot.forEach((doc) => {
//           const { id, image, title, subtitle } = doc.data();
//           campaignsList.push({ id, image, title, subtitle });
//         });

//         setCampaigns(campaignsList);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       }
//     };

  // fetchCampaigns();
//   }, []); // useEffect sadece bir kere çalışacak, yani komponent yüklendiğinde

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={campaigns}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.campaignItem}>
//             <Image
//               source={{ uri: item.image }}
//               style={styles.campaignImage}
//             />
//             <Text style={styles.campaignTitle}>{item.title}</Text>
//             <Text style={styles.campaignSubtitle}>{item.subtitle}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   campaignItem: {
//     marginBottom: 20,
//   },
//   campaignImage: {
//     width: 200,
//     height: 100,
//     resizeMode: 'cover',
//     borderRadius: 8,
//   },
//   campaignTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 8,
//   },
//   campaignSubtitle: {
//     fontSize: 16,
//     color: 'gray',
//   },
// });

// export default KampanyalarScreen;