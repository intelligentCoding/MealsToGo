import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  right: 10px;
  z-index: 9;
`;
export const Favourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );
  return (
    <FavouriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavouriteButton>
  );
};
