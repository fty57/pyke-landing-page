import P from "prop-types";
import * as Styled from "./styles";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const Typography = ({ children, uppercase }) => {
  return (
    <Styled.Container className={work_sans.className} uppercase={uppercase}>
      {children}
    </Styled.Container>
  );
};

Typography.propTypes = {
  uppercase: P.bool,
  children: P.string.isRequired,
};
