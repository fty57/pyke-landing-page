import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Typography } from "../components/Typography";
import { AccountCard } from "../components/AccountCard";

import { TopContainer } from "../components/TopContainer";
import { SectionContainer } from "../components/SectionContainer";
import { BackgroundContainer } from "../components/BackgroundContainer";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopContainer />
        <SectionContainer>
          <BackgroundContainer
            imgUrl="https://i.pinimg.com/originals/fa/e1/1a/fae11a396752675907689eb268785a9a.png"
            bgColor="#000"
          >
            <Typography type="text-uppercase">Buy a league of </Typography>
            <Typography type="title">Legends Account</Typography>
            <Divider />
            <div style={{ padding: "1.25rem" }}>
              <Button size="medium">
                <Typography type="button">Order Now</Typography>
              </Button>
            </div>
          </BackgroundContainer>
        </SectionContainer>
        <SectionContainer>
          <Typography type="text-uppercase">Choose Your Account</Typography>
          <AccountCard
            nationality="OCE"
            price="49.99"
            description="We understand the concept of the concept"
            bgColor="#FF0000"
          />
        </SectionContainer>
      </ThemeProvider>
    </>
  );
}
