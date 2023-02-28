import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import MenuCard from "../components/MenuCard";
import { db } from "../firebse";
import BasketIcon from "../components/BasketIcon";
const ResScreen = () => {
  {
    /* const route.params = useRoute() */
  }
  const {
    params: { imgUrl, title, rating, adres, res_des },
  } = useRoute();

  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    db.collection("dishes").onSnapshot((snapshot) =>
      setDishes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <SafeAreaView className="bg-gray-100 ">
      <BasketIcon />
      <ScrollView className="mb-20">
        {/*Header*/}
        <View className="bg-white">
          <Image
            className="w-full h-52 object-cover"
            source={{ uri: imgUrl }}
          />
          <View className="p-5 items-start space-y-2 border-b border-gray-200">
            <Text className="text-3xl font-bold mb-2">{title}</Text>
            <View className="flex-row space-x-3 items-center">
              <StarIcon color="teal" />
              <Text className="text-xs text-teal-500">{rating}</Text>
              <Text className="text-xs text-gray-500">{}</Text>
              <MapPinIcon color="gray" size={20} />
              <Text className="text-xs text-teal-500">nearby</Text>
              <Text className="text-xs text-gray-500">{adres}</Text>
            </View>
            <Text className=" text-gray-500 flex-none"> {res_des}</Text>
          </View>
          <View className="flex-row items-center space-x-4 border border-gray-200 p-4">
            <QuestionMarkCircleIcon color="gray" size={20} />
            <Text className="flex-1">Have a food allergy?</Text>
            <ChevronRightIcon color="teal" />
          </View>
        </View>
        <Text className="text-lg font-bold m-4"> Menu</Text>

        <View className="items-center">
          {dishes.map((item) => (
            <MenuCard
              id={item.id}
              key={item.id}
              name={item.data.dish_name}
              image={item.data.dish_img}
              price={item.data.dish_price}
              des={item.data.dish_des}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResScreen;
