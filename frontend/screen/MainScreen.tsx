import { Button, Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

export default function MainScreen() {
  return (
    <View style={div_styles.container}>
      <View style={div_styles.header}>
        <Text>메인 페이지</Text>
      </View>
      <View style={div_styles.body}>
        <View style={div_styles.body_treeview1}></View>
        <View style={div_styles.body_treeview2}></View>
        <View style={div_styles.body_buttonview3}>
          <Pressable style={widjet_styles.loginbutton}>나무 심기</Pressable>
        </View>
      </View>
      <View style={div_styles.footer}>
        <Pressable style={widjet_styles.navigationbutton}>버튼1</Pressable>
        <Pressable style={widjet_styles.navigationbutton}>버튼2</Pressable>
        <Pressable style={widjet_styles.navigationbutton}>버튼3</Pressable>
      </View>
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
    justifyContent: "center",
    alignItems: "center",

    //backgroundColor: "blue",
  },
  body: {
    flex: 4,
    //backgroundColor: "green",
    justifyContent: "center",
    padding: "8%",
  },

  body_treeview1: {
    flex: 0.5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  body_treeview2: {
    flex: 0.5,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  body_buttonview3: {
    flex: 0.2,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 0.7,
    backgroundColor: "blue",
  },
});

const widjet_styles = StyleSheet.create({
  loginbutton: {
    width: "60%",
    height: "60%",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  navigationbutton: {
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    margin: "5%",
    backgroundColor: "purple",
    borderRadius: 100,
  },
});
