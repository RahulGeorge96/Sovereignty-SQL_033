import React, { useEffect } from "react";
import { styles } from "../../styles/styles";
import { popularlist } from "../../constants/popularList";
import ListCard from "../Global/ListCard";

const List = () => {
  useEffect(() => {
    document.title = "Beehome - Listings";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <h1 className="text-3xl font-semibold">Popular listings</h1>
      <p className="text-gray-500 mt-4">Beehome's most popular watch lists.</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => {
          return <ListCard image={list.image} price={list.price} key={index} />;
        })}
      </div>
    </div>
  );
};

export default List;
