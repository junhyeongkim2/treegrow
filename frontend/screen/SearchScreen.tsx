import { Button, Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

export default function SearchScreen() {
  return (
    <View style={div_styles.container}>
      <View style={div_styles.header}>
        <Text>검색 페이지</Text>
      </View>
      <View style={div_styles.body}>
        <View style={div_styles.body_searchview}>
          <View style={div_styles.body_searchviewin}>
            <View style={div_styles.body_searchviewin_searchbar}>
              검색어를 입력하세요
            </View>
            <View style={div_styles.body_searchviewin_searchlist}>
              유저 리스트
            </View>
          </View>
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
    paddingHorizontal: "8%",
  },

  body_searchview: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14%",
  },

  body_searchviewin: {
    width: "85%",
    height: "90%",
    backgroundColor: "blue",
    alignItems: "center",
  },

  body_searchviewin_searchbar: {
    width: "100%",
    height: "10%",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  body_searchviewin_searchlist: {
    width: "100%",
    height: "85%",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
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
