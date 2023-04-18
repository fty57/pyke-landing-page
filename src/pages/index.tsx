import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import cards from "../utils/mock-cards";

import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Typography } from "../components/Typography";
import { AccountCard } from "../components/AccountCard";

import { TopContainer } from "../components/TopContainer";
import { SectionContainer } from "../components/SectionContainer";
import { BackgroundContainer } from "../components/BackgroundContainer";
import { AccountContainer } from "../components/AccountContainer";

import { QualityCard } from "../components/QualityCard";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopContainer />
        <SectionContainer>
          <BackgroundContainer
            height="50rem"
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
          <Typography type="text">Choose Your Account</Typography>
          <AccountContainer>
            {cards.map(
              ({ imgUrl, nationality, price, description, bgColor }, index) => {
                return (
                  <AccountCard
                    imgUrl={imgUrl}
                    nationality={nationality}
                    price={price}
                    description={description}
                    bgColor={bgColor}
                    key={index}
                  />
                );
              }
            )}
          </AccountContainer>
        </SectionContainer>
        <SectionContainer>
          <Typography type="text">Why You Should Buy From Us</Typography>
          <Typography type="card">
            Here at AsslyELO, we care a lot about quality. We make sure you are
            100% satisfied with our service, from payment to the actual LOL
            accounts you receive.
          </Typography>
          <BackgroundContainer
            height="50rem"
            imgUrl="https://img2.wallpaperscreen.com/wp/7s/6/kda-akali-neon-mask-lol-league-of-legends-s763-medium.jpg"
            bgColor="#000"
          >
            <QualityCard
              title="Oi"
              imgUrl="https://img2.wallpaperscreen.com/wp/"
              description="OI"
            />
          </BackgroundContainer>
        </SectionContainer>
      </ThemeProvider>
    </>
  );
}
