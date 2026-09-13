import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/(auth)/signUp"} className=" mt-4 bg-black text-white rounded-full p-4">Sign Up</Link>
       <Link href={"/(auth)/signIn"} className=" mt-4 bg-black text-white rounded-full p-4">Sign In</Link>
      
      
    </View>
  );
}