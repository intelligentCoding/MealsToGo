import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_background.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 179, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(74, 1, 67, 0.3);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  color: white;
  background-color: rgba(74, 1, 67, 0.7);
  padding: 80px 20px 20px 20px;
  margin-top: 40px;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 60%;
  position: absolute;
  top: 30px;
  z-index: 9999;
`;
