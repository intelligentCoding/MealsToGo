import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(74, 1, 67, 0.3);
`;
export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Open = styled(SvgXml)`
  flex-direction: row;
`;
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]}
  background-color: rgba(74, 1, 67, 1);
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
