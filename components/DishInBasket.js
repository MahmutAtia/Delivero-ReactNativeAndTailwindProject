import { View, Text, Image } from "react-native";
import React from "react";

const DishInBasket = () => {
  return (
    <View className="flex-row  justify-between p-5 items-center bg-white mb-2">
      <Text className="text-teal-500">3X</Text>
      <Image
        className="h-16 w-16"
        source={{
          uri: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=375,341",
        }}
      />
            <Text>negresko</Text>

      <View className="flex-row space-x-3">
        <Text>10 $</Text>
        <Text className="text-teal-500">Remove</Text>
      </View>
    </View>
  );
};

export default DishInBasket;
