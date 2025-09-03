import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "@/hooks/useTheme";


export default function Index() {

  const { toggleDarkMode } = useTheme();

  return (
    <View
      style={styles.container}
    >
    <Text style={styles.content}>Hello, Native 🌍</Text>
      <Text>Hey</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Dark Mode</Text>
      </TouchableOpacity>
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
