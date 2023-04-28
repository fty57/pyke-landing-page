import P from "prop-types";
import * as Styled from "./styles";
import { Typography } from "../Typography";

export const Input = ({ type, placeholder }) => {
  return <Styled.Container type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: P.string,
  placeholder: P.string,
};
