import P from "prop-types";
import * as Styled from "./styles";

import { Button } from "../Button";
import { Accordion } from "../Accordion";
import { Typography } from "../Typography";
import { Typography2 } from "../Typography2";
import { BackgroundContainer } from "../BackgroundContainer";

export const AccountCard = ({
  price,
  nationality,
  description,
  bgColor,
  imgUrl,
}) => {
  return (
    <Styled.Container>
      <Styled.Card>
        <BackgroundContainer
          imgUrl={imgUrl}
          bgColor={bgColor}
          height="14rem"
          width="100%"
          opacity="0.25"
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Styled.TopTip>
              <Typography2
                as="h3"
                color="whiteColor"
                weight="500"
                size="small"
                uppercase
              >
                {nationality}
              </Typography2>
            </Styled.TopTip>
            <Styled.PriceContainer>
              <Typography2
                as="h4"
                color="whiteColor"
                size="xsmall"
                weight="500"
                capitalize
              >
                Starting at {price}$
              </Typography2>
            </Styled.PriceContainer>
            <Styled.ButtonContainer>
              <Button size="small">
                <Typography2
                  as="h4"
                  color="whiteColor"
                  size="xsmall"
                  weight="500"
                  capitalize
                >
                  Order Now
                </Typography2>
              </Button>
            </Styled.ButtonContainer>
          </div>
        </BackgroundContainer>
        <Accordion title="Detailed information">
          <Typography2
            as="p"
            color="whiteColor"
            size="xxsmall"
            weight="500"
            capitalize
          >
            {description}
          </Typography2>
        </Accordion>
      </Styled.Card>
    </Styled.Container>
  );
};

AccountCard.propTypes = {
  imgUrl: P.string.isRequired,
  price: P.string.isRequired,
  nationality: P.string.isRequired,
  description: P.string.isRequired,
  bgColor: P.string,
};
