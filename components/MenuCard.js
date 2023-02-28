import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItim,
  selectBasketItems,
  selectBasketItemsById,
} from "../features/basketSlice";
import BasketIcon from "./BasketIcon";

const MenuCard = ({ id, name, des, price, image }) => {
  const [num, setNum] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector( state=> selectBasketItemsById(state,id));
  const dispatch = useDispatch();
  const addItemsToBasket = () =>
    dispatch(addItem({ id, name, des, price, image }));
  const removeItimFromBasket = () =>
    dispatch(removeItim({ id }));

  return (
    
   
    
    <TouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      className="p-5 bg-white border border-gray-200 -z-10"
    >
      <View className=" flex-row justify-between items-stretch space-y-2 m-2">
        <View className="space-y-1">
          <Text className="text-lg "> {name}</Text>
          <Text className=" text-gray-500 w-64 ">
            {des}
          </Text>
          <Text className=" text-gray-500">{price} $</Text>
        </View>
        <Image
          className="h-20 w-20"
          source={{
            uri: image,
          }}
        />
      </View>

      {isPressed && (
        <View className="flex-row mt-2 space-x-3 items-center">
          <TouchableOpacity
            onPress={() => {
              removeItimFromBasket();
            }}
          >
            <MinusCircleIcon color="teal" size={35} />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity
            onPress={() => {
              addItemsToBasket();
            }}
          >
            <PlusCircleIcon color="teal" size={35} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
   
  );
};

export default MenuCard;
