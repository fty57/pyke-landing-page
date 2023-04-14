import P from "prop-types";
import * as Styled from "./styles";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const Logo = ({ text }) => {
  return (
    <Styled.Container className={work_sans.className}>
      <span>{text}</span>
    </Styled.Container>
  );
};

Logo.propTypes = {
  text: P.node.isRequired,
};
