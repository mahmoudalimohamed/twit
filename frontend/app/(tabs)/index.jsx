import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100">
        <Ionicons name="home-outline" size={24} color="#1DA1F2" />
        <Text className="text-xl font-bold text-gray-900">Home</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
