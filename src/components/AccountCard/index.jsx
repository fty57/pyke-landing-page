import P from "prop-types";
import * as Styled from "./styles";

import { Button } from "../Button";
import { Accordion } from "../Accordion";
import { Typography } from "../Typography";
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
        <BackgroundContainer imgUrl={imgUrl} bgColor={bgColor}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Styled.TopTip>
              <Typography type="text-uppercase">{nationality}</Typography>
            </Styled.TopTip>
            <Styled.PriceContainer>
              <Typography type="text">Starting at {price}$</Typography>
            </Styled.PriceContainer>
            <Styled.ButtonContainer>
              <Button size="small">
                <Typography type="button">Order Now</Typography>
              </Button>
            </Styled.ButtonContainer>
          </div>
        </BackgroundContainer>
        <Accordion title="Detailed information">
          <Typography type="card">{description}</Typography>
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
