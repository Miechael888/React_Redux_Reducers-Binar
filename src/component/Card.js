import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {
  const { authReducer } = useSelector((state) => state);

  return (
    <div>
      {authReducer.isLogin == false ? (
        <h1>Anda belum terdaftar</h1>
      ) : (
        <div>
          <CardName />
          <CardImage />
        </div>
      )}
    </div>
  );
};

export default Card;
