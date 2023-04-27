import P from "prop-types";
import * as Styled from "./styles";
import { Menu } from "../Menu";

const links = [
  { children: "Home", link: "#target 1" },
  { children: "Accounts", link: "#target 2" },
  { children: "About", link: "#target 3" },
  { children: "Feedbacks", link: "#target 3" },
  { children: "News", link: "#target 3" },
];

export const TopContainer = () => {
  return (
    <Styled.Container>
      <Menu links={links} />
    </Styled.Container>
  );
};
