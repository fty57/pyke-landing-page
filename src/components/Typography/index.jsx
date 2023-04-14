import P from "prop-types";
import * as Styled from "./styles";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const Typography = ({ children, type = "text-uppercase" }) => {
  return (
    <Styled.Container className={work_sans.className}>
      {type === "text-uppercase" && (
        <Styled.MainType>{children}</Styled.MainType>
      )}
      {type === "title" && <Styled.TitleType>{children}</Styled.TitleType>}
    </Styled.Container>
  );
};

Typography.propTypes = {
  type: P.oneOf(["text-uppercase", "title", "text"]),
  children: P.string.isRequired,
};
