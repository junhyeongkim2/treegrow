import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screen/LoginScreen";
import MainScreen from "./screen/MainScreen";
import SearchScreen from "./screen/SearchScreen";
import UserDetailScreen from "./screen/UserDetailScreen";

export default function App() {
  return (
    <>
      <UserDetailScreen></UserDetailScreen>
    </>
  );
}
