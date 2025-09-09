import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView,SafeAreaView, Text } from 'react-native';
import UserCard from './components/DriverCard';
import drivers from "./assets/data";
import styles from './styles/App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
 <Text style={styles.title}>Profils détaillés</Text>
        {drivers().slice(0, 2).map((driver) => (
          <UserCard key={driver.id} driverData={driver} variant="detailed"/>
        ))}
<Text style={styles.title}>Autres membres</Text>
        {drivers().slice(2).map((driver) => (
          <UserCard key={driver.id} driverData={driver} variant="compact"/>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
;
