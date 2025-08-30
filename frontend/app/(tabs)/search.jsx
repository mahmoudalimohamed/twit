import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* HEADER */}
      <View className="px-4 py-3 border-b border-gray-100">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
          <Feather name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search Twitter"
            className="flex-1 ml-3 text-base"
            placeholderTextColor="#657786"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
