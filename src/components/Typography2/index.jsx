import P from "prop-types";
import * as Styled from "./styles";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const Typography2 = ({
  children,
  as = "h1",
  size = "huge",
  weight = "400",
  uppercase = false,
  capitalize = false,
  color = "blueColor",
}) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      color={color}
      weight={weight}
      uppercase={uppercase}
      capitalize={capitalize}
      className={work_sans.className}
    >
      {children}
    </Styled.Title>
  );
};

Typography2.propTypes = {
  children: P.node.isRequired,
  color: P.oneOf([
    "blueColor",
    "pinkColor",
    "pinkSubColor",
    "whiteColor",
    "blackColor",
  ]),
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: P.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "huge",
    "xhuge",
  ]),
  weight: P.oneOf(["400", "500", "600", "700"]),
  uppercase: P.bool,
  capitalize: P.bool,
};
