import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const NotesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
        <View style={styles.main}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
      
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "navy",
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  footer: {
    flex: 1,
    height: 20,
    width: "100%",
    backgroundColor: "yellow",
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    height: 20,
    width: "100%",
  },
  main: {
    flex: 1,
    height: 200,
    width: "100%",
    backgroundColor: "white"
  }
});

export default NotesScreen