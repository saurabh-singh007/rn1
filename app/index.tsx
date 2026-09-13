import { Redirect } from "expo-router";
// import { useAuth } from "@/hooks/useAuth"; // however you track auth state

export default function Index() {
//   const { isLoggedIn, isLoading } = useAuth();

//   if (isLoading) {
//     return null; // or a splash/loading screen
//   }

  return  <Redirect href="/(tabs)" />;
}