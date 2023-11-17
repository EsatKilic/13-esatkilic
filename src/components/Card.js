import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { Feather } from "@expo/vector-icons";
import MyText from "./MyText";
  
  const Card = () => {
    

    const [isVisible, setIsVisible] = useState(true);
    return (
       
<Image style={styles.container} source={require("../../assets/hopicard2.png")} />
    //   <ImageBackground
    //     style={styles.container}
    //     imageStyle={styles.imageStyle}
    //     source={require("../../assets/hopiback.jpg")}
    //   >
        
    //     <View style={styles.top}>
    //     <Image style={styles.visa} source={require("../../assets/indirim1.jpeg")} />
    //       <Image style={styles.visa} source={require("../../assets/indirim1.jpeg")} />
    //     </View>
    //     <View style={styles.balance}>
    //       <MyText style={styles.balanceText}>
    //       <Image style={styles.visa} source={require("../../assets/indirim2.jpg")} />
    //       </MyText>
          
    //     </View>
    //     <View style={styles.bottom}>
    //       <Image
    //         source={{ uri: "https://picsum.photos/id/64/200/300" }}
    //         style={styles.avatar}
    //       />
    //        <MyText style={styles.text}>BOYNER</MyText>
    //     </View>
    //   </ImageBackground>
    );
  };
  
  export default Card;
  
  const styles = StyleSheet.create({
    container: {
      height: 200,
      width: 330,
      justifyContent: "space-between",
    },
    imageStyle: {
      borderRadius: 16,
    },
    top: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
    },
    text: {
      color: "#fff",
      fontSize: 22,
      fontFamily: "DMSans-Medium",
    },
    visa: {
      height: 36,
      width: 64,
      resizeMode: "contain",
    },
    balance: {
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    balanceText: {
      color: "#fff",
      fontSize: 24,
      fontFamily: "DMSans-Medium",
    },
    bottom: {
      backgroundColor: "#dededeaa",
      paddingHorizontal: 16,
      paddingVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    avatar: {
      height: 36,
      width: 36,
      borderRadius: 36,
    },
    name: {
      fontSize: 18,
      fontFamily: "DMSans-Medium",
      color: "#fff",
      flex: 1,
    },
    cardNumber: {
      fontSize: 18,
      fontFamily: "DMSans-Medium",
      color: "#fff",
    },
  });
  