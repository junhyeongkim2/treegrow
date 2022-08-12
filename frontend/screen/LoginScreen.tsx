import { Button, Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={div_styles.container}>
      <View style={div_styles.header}></View>
      <View style={div_styles.body}>
        <View style={div_styles.body_buttonview}>
          <Text>소셜 로그인</Text>
          <Pressable style={widjet_styles.loginbutton}>카카오 로그인</Pressable>
          <Pressable style={widjet_styles.loginbutton}> 구글 로그인</Pressable>
        </View>
      </View>
      <View style={div_styles.footer}></View>
    </View>
  );
}

const div_styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "skyblue",
    flexDirection: "column",
    padding: "20",
  },
  header: {
    flex: 1,
    //backgroundColor: "blue",
  },
  body: {
    flex: 4,
    //backgroundColor: "green",
    justifyContent: "center",
  },

  body_buttonview: {
    flex: 0.5,
    //backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 0.7,
    //backgroundColor: "yellow",
  },
});

const widjet_styles = StyleSheet.create({
  loginbutton: {
    width: "30%",
    height: "20%",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
});
