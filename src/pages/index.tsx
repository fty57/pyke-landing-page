import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import cards from "../utils/mock-cards";
import qualityCards from "../utils/mock-quality-cards";

import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Typography } from "../components/Typography";
import { AccountCard } from "../components/AccountCard";

import { TopContainer } from "../components/TopContainer";
import { SectionContainer } from "../components/SectionContainer";
import { BackgroundContainer } from "../components/BackgroundContainer";

import { ColumnText } from "../components/ColumnText";
import { AccountContainer } from "../components/AccountContainer";
import { QualityContainer } from "../components/QualityContainer";

import { QualityCard } from "../components/QualityCard";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopContainer />
        <SectionContainer>
          <BackgroundContainer
            opacity="0.25"
            width="100%"
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
            shadowEffect
            opacity="0.75"
            width="90%"
            height="50rem"
            imgUrl="https://img2.wallpaperscreen.com/wp/7s/6/kda-akali-neon-mask-lol-league-of-legends-s763-medium.jpg"
            bgColor="#000"
          >
            <QualityContainer>
              {qualityCards.map(({ title, imgUrl, description }, index) => {
                return (
                  <QualityCard
                    imgUrl={imgUrl}
                    title={title}
                    description={description}
                    key={index}
                  />
                );
              })}
            </QualityContainer>
          </BackgroundContainer>
        </SectionContainer>
        <SectionContainer>
          <Typography type="text">Why Buy League of Legends Account</Typography>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <BackgroundContainer
              shadowEffect
              opacity="0.25"
              width="150%"
              height="40rem"
              imgUrl="https://static1-br.millenium.gg/entity_articles/7/67/97/@/142281-imagem-2022-11-09-100952311-full-1.png"
              bgColor="#000"
            />
            <ColumnText title="STILL UNDECIDED ?">
              <Typography type="card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odio placeat minima, unde quis sit et assumenda, consectetur
                deleniti tenetur aliquid corrupti vel at voluptates maxime
                provident impedit, dignissimos repellat.
              </Typography>
              <Typography type="card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odio placeat minima, unde quis sit et assumenda, consectetur
                deleniti tenetur aliquid corrupti vel at voluptates maxime
                provident impedit, dignissimos repellat.
              </Typography>
              <Typography type="card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odio placeat minima, unde quis sit et assumenda, consectetur
                deleniti tenetur aliquid corrupti vel at voluptates maxime
                provident impedit, dignissimos repellat.
              </Typography>
              <Divider width="100%" />
              <Typography type="card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odio placeat minima, unde quis sit et assumenda, consectetur
                deleniti tenetur aliquid corrupti vel at voluptates maxime
                provident impedit, dignissimos repellat.
              </Typography>
              <Typography type="card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                odio placeat minima, unde quis sit et assumenda, consectetur
                deleniti tenetur aliquid corrupti vel at voluptates maxime
                provident impedit, dignissimos repellat.
              </Typography>
            </ColumnText>
          </div>
        </SectionContainer>
      </ThemeProvider>
    </>
  );
}
