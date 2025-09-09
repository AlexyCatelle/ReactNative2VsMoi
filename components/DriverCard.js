import {Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/DriverCard.styles";


export default function driverDataCard({ driverData, variant = "detailled" }) {
  if (variant === "compact") {
    return (
      <View style={styles.compactCard}>
        <Image source={{ uri: driverData.avatar }} style={styles.compactAvatar} />
        <View style={styles.compactInfo}>
          <Text style={styles.name}>{driverData.name}</Text>
          <Text style={styles.job}>{driverData.job}</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-ellipses" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: driverData.avatar }} style={styles.avatar} />
        <View style={styles.driverDataInfo}>
          <Text style={styles.name}>{driverData.name}</Text>
          <Text style={styles.job}>{driverData.job}</Text>
          <Text style={styles.rating}>{driverData.rating}</Text>
        </View>
      </View>
      <View style={styles.contact}>
        <Text style={styles.contactItem}>Email: {driverData.email}</Text>
        <Text style={styles.contactItem}>Téléphone: {driverData.phone}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contacter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};