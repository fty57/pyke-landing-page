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
import { NameCard } from "../components/NameCard";
import { NameContainer } from "../components/NameContainer";

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
        <SectionContainer>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              gap: "10rem",
              padding: "3rem 12rem",
            }}
          >
            <div
              style={{
                flex: "3",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Typography type="text-uppercase">What</Typography>
              <Typography type="text">PEOPLE SAY</Typography>
              <Typography type="text-uppercase">About Us</Typography>
              <hr
                style={{
                  left: 0,
                  width: "25%",
                  height: "0.75rem",
                  backgroundColor: "#b444b3",
                  border: "0px solid",
                  borderRadius: "25px",
                }}
              />
              <Typography type="button">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit itaque libero corporis quaerat iusto distinctio
                voluptatum saepe, voluptas ipsam similique facilis officia
                quidem voluptatibus dolor, et nobis culpa at sequi.
              </Typography>
            </div>
            <NameContainer>
              <NameCard title="Rick M">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ab sunt ex mollitia vero ducimus quia voluptate,
                laboriosam laudantium facere ratione debitis adipisci esse et
                autem nesciunt labore numquam eos?
              </NameCard>
              <NameCard title="Rick M">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ab sunt ex mollitia vero ducimus quia voluptate,
                laboriosam laudantium facere ratione debitis adipisci esse et
                autem nesciunt labore numquam eos?
              </NameCard>
              <NameCard title="Rick M">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ab sunt ex mollitia vero ducimus quia voluptate,
                laboriosam laudantium facere ratione debitis adipisci esse et
                autem nesciunt labore numquam eos?
              </NameCard>
            </NameContainer>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "0.875rem",
              paddingBottom: "16rem",
            }}
          >
            <Typography type="text">Subscribe Now</Typography>
            <div>
              <Typography type="button">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                pariatur atque nam, doloremque, fugiat placeat quidem ad totam
                sapiente dicta inventore eaque! Voluptas, eveniet ipsum
                explicabo et itaque inventore a?
              </Typography>
              <Typography type="button">
                Subscribe to our new Letter and be the First to Know
              </Typography>
            </div>
            <div
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <input
                type="email"
                placeholder="EMAIL"
                style={{
                  width: "500px",
                  border: "0px solid",
                  padding: "0.6875rem",
                  borderRadius: "0.25rem",
                  boxShadow: "inset 0px 0px 20px 20px rgba(40, 36, 36, 0.7)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <Button size="small">
                  <Typography type="button">Subscribe</Typography>
                </Button>
              </div>
            </div>
          </div>
        </SectionContainer>
      </ThemeProvider>
    </>
  );
}
