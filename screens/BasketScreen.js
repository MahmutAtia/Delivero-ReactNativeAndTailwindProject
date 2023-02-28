import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectRes } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import DishInBasket from "../components/DishInBasket";

const BasketScreen = () => {
  const dispatsh = useDispatch();
  const res = useSelector(selectRes);
  const dishes = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroubed] = useState([]);

  useEffect(() => {
    const groupedDishes = dishes.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroubed(groupedDishes);
  }, [dishes]);
  console.log(dishes[0].name);
  console.log(groupedItemsInBasket);

  return (
    <SafeAreaView >
    
      <View>
        <View className="flex-row justify-between p-5 bg-white">
          <View className="mx-auto">
            <Text>Basket</Text>
            <Text>restaurant</Text>
          </View>
          <XCircleIcon color="teal" size={40} />
        </View>

        {/* delivering*/}
        <View className="flex-row justify-between items-center p-3 bg-white my-5">
          <View className="flex-row space-x-4 items-center">
            <Image
              className="h-10 w-10 rounded-full"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctjd-61udmE_sieZQqPpv4hi4s523H8W5SQ&usqp=CAU",
              }}
            />
            <Text>Delivering in 50-35 minutes</Text>
          </View>
          <Text className="text-teal-500">Change</Text>
        </View>
        {/* dishes */}
        <ScrollView>
          <DishInBasket />
          
        </ScrollView>
        </View>
        <View className="bg-gray-100  p-1 ">
     <View className="absolute bg-white p-5  top-36 z-10 w-full">
      <View className="flex-row justify-between">
        <View>
        <Text> Subtotal</Text>
        <Text>Delivery Fee</Text>
        <Text> Order Total</Text>

        </View>
        <View>
        <Text> 50$</Text>
        <Text>5 $</Text>
        <Text> 150$</Text>
         </View>
         </View>
          <View className="p-5 bg-teal-500 w-11/12 rounded-2xl" >
            <Text>Place Order</Text>
          </View>
      </View>
      </View>

     

    </SafeAreaView>
  );
};

export default BasketScreen;
