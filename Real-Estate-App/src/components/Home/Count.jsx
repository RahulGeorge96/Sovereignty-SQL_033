import React from "react";
import { styles } from "../../styles/styles";

const Count = () => {
  return (
    <section
      className={`py-6 lg:py-12 ${styles.paddingHorizontal} flex flex-col items-center gap-6`}
    >
      <h1 className="text-3xl font-semibold text-center">
        What's happening in Beehome
      </h1>
      <div className="w-full flex items-center lg:justify-around justify-center flex-wrap gap-6 pt-4">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">10M+</h1>
          <p className="text-gray-500 text-sm">Users</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">23,652</h1>
          <p className="text-gray-500 text-sm">Homes for rent</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">1,000+</h1>
          <p className="text-gray-500 text-sm">Recently rating</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-yellow-500 font-semibold text-3xl">5,892</h1>
          <p className="text-gray-500 text-sm">Latest Properties added </p>
        </div>
      </div>
    </section>
  );
};

export default Count;
