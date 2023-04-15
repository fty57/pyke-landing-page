import P from "prop-types";
import * as Styled from "./styles";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const Typography = ({
  children,
  type = "text-uppercase",
  className,
}) => {
  return (
    <Styled.Container className={work_sans.className}>
      {type === "text-uppercase" && (
        <Styled.MainType>{children}</Styled.MainType>
      )}
      {type === "title" && <Styled.TitleType>{children}</Styled.TitleType>}
      {type === "button" && (
        <Styled.ButtonType className="hoverable">{children}</Styled.ButtonType>
      )}
      {type === "text" && <Styled.TextTitle>{children}</Styled.TextTitle>}
    </Styled.Container>
  );
};

Typography.propTypes = {
  type: P.oneOf(["text-uppercase", "title", "button", "text"]),
  children: P.string.isRequired,
  className: P.string,
};
