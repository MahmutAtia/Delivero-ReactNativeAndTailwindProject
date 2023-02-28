import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CatigoryCard from "./CatigoryCard";
import { db } from "../firebse";

const Catigories = () => {
  const [cats, setCats] = useState([]);

  // console.log(cats);

 useEffect(() => {
  db.collection("category").onSnapshot(snapshot=>(
    setCats(
        snapshot.docs.map(
            doc => ({
                 
                id : doc.id,
                data:doc.data()
            })
        )

    )
))


 }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom:10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
     { cats.map(
        item=> {
          return <CatigoryCard key= {item.data.id}
          title = {item.data.fast_food} 
          imgUrl= {item.data.img}
          />
        }
      )}
    </ScrollView>
  );
};

export default Catigories;
