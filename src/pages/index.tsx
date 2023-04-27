import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import cards from "../utils/mock-cards";
import qualityCards from "../utils/mock-quality-cards";

import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Typography } from "../components/Typography";
import { Typography2 } from "../components/Typography2";
import { AccountCard } from "../components/AccountCard";

import { Footer } from "../components/Footer";
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
            <Typography2
              as="h2"
              size="medium"
              weight="500"
              color="whiteColor"
              uppercase
            >
              Buy a league of
            </Typography2>
            <Typography2
              as="h2"
              size="xlarge"
              weight="600"
              color="whiteColor"
              uppercase
              textShadow="0 0 20px rgba(0, 255, 255, 0.5)"
              letterSpacing="1rem"
            >
              Legends Account
            </Typography2>
            <Divider />
            <div style={{ padding: "1.25rem" }}>
              <Button size="medium">
                <Typography2
                  as="h4"
                  size="xsmall"
                  weight="500"
                  color="whiteColor"
                  capitalize
                >
                  Order Now
                </Typography2>
              </Button>
            </div>
          </BackgroundContainer>
        </SectionContainer>

        <SectionContainer spacings="medium">
          <div style={{ marginBottom: "1.75rem" }}>
            <Typography2
              as="h2"
              weight="500"
              color="whiteColor"
              size="medium"
              capitalize
            >
              Choose Your Account
            </Typography2>
          </div>
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
          <Typography2
            as="h2"
            weight="500"
            color="whiteColor"
            size="medium"
            capitalize
          >
            Choose Your Account
          </Typography2>
          <Typography2
            as="h2"
            weight="500"
            color="whiteColor"
            size="xsmall"
            capitalize
          >
            Here at AsslyELO, we care a lot about quality. We make sure you are
            100% satisfied with our service, from payment to the actual LOL
            accounts you receive.
          </Typography2>
          <BackgroundContainer
            shadowEffect
            width="100%"
            height="100%"
            opacity="0.50"
            bgColor="#000"
            imgUrl="https://static1-br.millenium.gg/entity_articles/9/67/69/@/135550-splash-art-de-pantheon-cacador-de-dragoes-imagem-riot-gamesdivulgacao-full-1.jpg"
          >
            <QualityContainer>
              {qualityCards.map(({ title, imgUrl, description }, index) => {
                return (
                  <QualityCard
                    key={index}
                    imgUrl={imgUrl}
                    title={title}
                    description={description}
                  />
                );
              })}
            </QualityContainer>
          </BackgroundContainer>
        </SectionContainer>

        <SectionContainer>
          <Typography2
            as="h2"
            weight="500"
            color="whiteColor"
            size="medium"
            capitalize
          >
            Why Buy League of Legends Account
          </Typography2>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <BackgroundContainer
              shadowEffect
              opacity="0.75"
              width="150%"
              height="100%"
              imgUrl="https://static1-br.millenium.gg/entity_articles/7/67/97/@/142281-imagem-2022-11-09-100952311-full-1.png"
              bgColor="#000"
            >
              <ColumnText title="STILL UNDECIDED ?">
                <Typography2
                  as="p"
                  color="whiteColor"
                  size="xsmall"
                  weight="500"
                  capitalize
                >
                  Because we care about you, we waant to make sure that you know
                  exactly the benefits whe you buy a League of Legends account.
                </Typography2>
                <Typography2
                  as="p"
                  color="whiteColor"
                  size="xsmall"
                  weight="500"
                  capitalize
                >
                  The most obvious benefit is that you dont have to work your
                  way up from level 1 to level 30 again. Depending on your
                  experience and skill, that can take a few days or a couple of
                  weeks. With a level 30 smurf account, you can jump right into
                  the action with a high-level account from Day 1.
                </Typography2>
                <Typography2
                  as="p"
                  color="whiteColor"
                  size="xsmall"
                  weight="500"
                  capitalize
                >
                  In League of Legends, the ELO system prevents hight-level
                  players from fighting alongside low-level players. This means
                  high-level players cant play with and show the ropes to the
                  real life friends who are just starting out. But with a
                  unkanked smurf account, that becoms possible.
                </Typography2>
                <Divider />
                <Typography2
                  as="p"
                  color="whiteColor"
                  size="xsmall"
                  weight="500"
                  capitalize
                >
                  Experience is the best teacher. Sadly, practice new Champions
                  and diferentes roles during real matches can become ugly and
                  will affect your reputation. The soluction? Use a LOL smurf
                  account to experiment with new Champions, equipment builds,
                  strategies, and roles.
                </Typography2>
                <Typography2
                  as="p"
                  color="whiteColor"
                  size="xsmall"
                  weight="500"
                  capitalize
                >
                  Lastly, with a level 30 smuth account, you can take a break
                  from the fience competition in hight ELO and go back to simply
                  having fun, even if you are playing with and agains
                  inexperience players. Everyone deserves a breake every now and
                  then.
                </Typography2>
              </ColumnText>
            </BackgroundContainer>
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
        <Footer />
      </ThemeProvider>
    </>
  );
}
