import React from "react";

interface IRestaurantProps {
  id: string;
  coverImg: string;
  name: string;
  categoryName?: string;
}

export const Restaurant: React.FC<IRestaurantProps> = ({
  coverImg,
  name,
  categoryName,
}) => (
  <div className="flex flex-col">
    <div
      style={{ backgroundImage: `url(${coverImg})` }}
      className="bg-cover bg-center mb-3 py-28"
    ></div>
    <h3 className="text-xl">{name}</h3>
    <span className="border-t mt-2 py-2 text-xs opacity-50 border-gray-400">
      {categoryName}
    </span>
  </div>
);
