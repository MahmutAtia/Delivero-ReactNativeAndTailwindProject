import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/core";

const FeaturElemant = ({ imgUrl, title, rating, adres,res_des }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ResScreen", { imgUrl, title, rating, adres,res_des })
      }
      className="h-64 w-64  bg-white ml-2 shadow-sm"
    >
      <Image
        className=" h-40 w-full"
        source={{
          uri: imgUrl,
        }}
      />
      <Text className="text-lg font-bold">{title}</Text>

      <View className="flex-row space-x-1 items-center ">
        <StarIcon color="teal" />
        <Text className="text-xs text-teal-500">{rating}</Text>
        <Text className="text-xs text-gray-500">ofers</Text>
      </View>
      <View className="flex-row space-x-1 items-center ">
        <MapPinIcon color="gray" size={20} />
        <Text className="text-xs text-teal-500">nearby</Text>
        <Text className="text-xs text-gray-500">{adres.substring(0, 30)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturElemant;
