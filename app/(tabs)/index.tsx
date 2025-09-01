import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hello, Nicole 🌍</Text>
      <Text>Hey</Text>
    </View>
  );
}



//creating a styleSheet for design
const styles = StyleSheet.create({
  container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "sliver",
  },
  content: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
  }
})
