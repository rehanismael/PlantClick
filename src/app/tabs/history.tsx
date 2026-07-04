import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const history = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text style={{ fontFamily: "Manrope-ExtraBold", fontSize: 30 }}>
          History
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default history;
