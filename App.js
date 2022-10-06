import { StyleSheet, Text, SafeAreaView } from "react-native";
import Nav from "./components/organisms/Nav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Nav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
