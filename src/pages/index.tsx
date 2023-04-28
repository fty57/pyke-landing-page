import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import cards from "../utils/mock-cards";
import qualityCards from "../utils/mock-quality-cards";
import WallPaper from "../../public/img/wallpaper.jpg";

import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { Typography } from "../components/Typography";
import { AccountCard } from "../components/AccountCard";

import { Input } from "../components/Input";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionContainer } from "../components/SectionContainer";
import { BackgroundContainer } from "../components/BackgroundContainer";

import { ColumnText } from "../components/ColumnText";
import { AccountContainer } from "../components/AccountContainer";
import { QualityContainer } from "../components/QualityContainer";

import { QualityCard } from "../components/QualityCard";
import { NameCard } from "../components/NameCard";
import { NameContainer } from "../components/NameContainer";
import { AboutContainer } from "../components/AboutContainer";
import { InputContainer } from "../components/InputContainer";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <BackgroundContainer
          id="home"
          shadowEffect
          width="100%"
          opacity="0.50"
          height="50rem"
          bgColor="#252525"
          imgUrl="https://i.pinimg.com/originals/fa/e1/1a/fae11a396752675907689eb268785a9a.png"
        >
          <SectionContainer>
            <Typography
              as="h2"
              size="medium"
              weight="500"
              color="whiteColor"
              uppercase
            >
              Buy a league of
            </Typography>
            <Typography
              as="h2"
              size="xlarge"
              weight="600"
              color="whiteColor"
              uppercase
              textShadow="0 0 20px rgba(0, 255, 255, 0.5)"
              letterSpacing="1rem"
            >
              Legends Account
            </Typography>
            <Divider />
            <div style={{ padding: "1.25rem" }}>
              <Button size="medium">
                <Typography
                  as="h4"
                  size="xsmall"
                  weight="500"
                  color="whiteColor"
                  capitalize
                >
                  Order Now
                </Typography>
              </Button>
            </div>
          </SectionContainer>
        </BackgroundContainer>

        <SectionContainer id="accounts" spacings="huge">
          <div style={{ marginBottom: "1.75rem" }}>
            <Typography
              as="h2"
              capitalize
              weight="500"
              size="medium"
              color="whiteColor"
            >
              Choose Your Account
            </Typography>
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

        <BackgroundContainer
          shadowEffect
          width="100%"
          height="100%"
          opacity="0.65"
          bgColor="#252525"
          imgUrl="https://static1-br.millenium.gg/entity_articles/9/67/69/@/135550-splash-art-de-pantheon-cacador-de-dragoes-imagem-riot-gamesdivulgacao-full-1.jpg"
        >
          <SectionContainer spacings="huge">
            <div style={{ marginBottom: "1.75rem" }}>
              <Typography
                as="h2"
                capitalize
                weight="500"
                size="medium"
                color="whiteColor"
              >
                Why you should buy from us
              </Typography>
            </div>
            <Typography
              as="h2"
              capitalize
              weight="500"
              size="xsmall"
              color="whiteColor"
            >
              Here at AsslyELO, we care a lot about quality. We make sure you
              are 100% satisfied with our service, from payment to the actual
              LOL accounts you receive.
            </Typography>

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
          </SectionContainer>
        </BackgroundContainer>

        <BackgroundContainer
          id="about"
          shadowEffect
          width="100%"
          height="100%"
          opacity="0.75"
          bgColor="#252525"
          imgUrl="https://static1-br.millenium.gg/entity_articles/7/67/97/@/142281-imagem-2022-11-09-100952311-full-1.png"
        >
          <SectionContainer spacings="huge">
            <Typography
              as="h2"
              capitalize
              weight="500"
              size="medium"
              color="whiteColor"
            >
              Why Buy League of Legends Account
            </Typography>
            <ColumnText title="STILL UNDECIDED ?">
              <Typography
                as="p"
                capitalize
                weight="500"
                size="xsmall"
                color="whiteColor"
              >
                Because we care about you, we waant to make sure that you know
                exactly the benefits whe you buy a League of Legends account.
              </Typography>
              <Typography
                as="p"
                capitalize
                weight="500"
                size="xsmall"
                color="whiteColor"
              >
                Moreover, a smurf account can come in handy when you want to
                take a break from the competitive scene and just have some fun.
                You can play with a more relaxed mindset, try out unconventional
                builds, and enjoy the game without the pressure of maintaining a
                high rank.
              </Typography>
              <Typography
                as="p"
                capitalize
                weight="500"
                size="xsmall"
                color="whiteColor"
              >
                The most obvious benefit is that you dont have to work your way
                up from level 1 to level 30 again. Depending on your experience
                and skill, that can take a few days or a couple of weeks. With a
                level 30 smurf account, you can jump right into the action with
                a high-level account from Day 1.
              </Typography>
              <Typography
                as="p"
                capitalize
                weight="500"
                size="xsmall"
                color="whiteColor"
              >
                In League of Legends, the ELO system prevents hight-level
                players from fighting alongside low-level players. This means
                high-level players cant play with and show the ropes to the real
                life friends who are just starting out. But with a unkanked
                smurf account, that becoms possible.
              </Typography>
              <Divider />
              <Typography
                as="p"
                capitalize
                weight="500"
                size="xsmall"
                color="whiteColor"
              >
                Experience is the best teacher. Sadly, practice new Champions
                and diferentes roles during real matches can become ugly and
                will affect your reputation. The soluction? Use a LOL smurf
                account to experiment with new Champions, equipment builds,
                strategies, and roles.
              </Typography>
              <Typography
                as="p"
                capitalize
                weight="500"
                size="xsmall"
                color="whiteColor"
              >
                Lastly, with a level 30 smuth account, you can take a break from
                the fience competition in hight ELO and go back to simply having
                fun, even if you are playing with and agains inexperience
                players. Everyone deserves a breake every now and then.
              </Typography>
            </ColumnText>
          </SectionContainer>
        </BackgroundContainer>

        <SectionContainer id="feedbacks" spacings="huge">
          <AboutContainer>
            <div
              style={{
                flex: "3",
                gap: "1rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                as="h4"
                uppercase
                weight="500"
                align="left"
                size="medium"
                color="whiteColor"
              >
                What
              </Typography>
              <Typography
                as="h4"
                uppercase
                weight="500"
                size="small"
                align="left"
                color="whiteColor"
              >
                PEOPLE SAY
              </Typography>
              <Typography
                as="h4"
                uppercase
                weight="500"
                align="left"
                size="medium"
                color="whiteColor"
              >
                About Us
              </Typography>
              <hr
                style={{
                  left: 0,
                  width: "25%",
                  height: "0.75rem",
                  border: "0px solid",
                  borderRadius: "25px",
                  backgroundColor: "#b444b3",
                }}
              />
              <Typography
                as="p"
                weight="500"
                align="left"
                size="xsmall"
                color="whiteColor"
              >
                We understand that real feedback matters in your decision making
                process. Check out what previous customers say about us!
              </Typography>
            </div>
            <NameContainer>
              <NameCard title="Rick M">
                Wanted and account to duo with my silver friend who was begging
                me! Able to have 2 full rune pages + my main champions with 1 or
                2 champions I want to experiment with within 10 minutes. Great
                job.
              </NameCard>
              <NameCard title="Stasy G">
                Excellent customer service! Its my first time buying a League of
                Legends account, so I had no clue about the entire process. The
                customer support team was more than happy to help and make sure
                I am satisfied!
              </NameCard>
              <NameCard title="Michael B">
                The account I got is really good. I have bought accounts from
                other websites before but all or them got banned in less than 24
                hours. No such experience with this web.
              </NameCard>
            </NameContainer>
          </AboutContainer>
        </SectionContainer>

        <BackgroundContainer
          id="news"
          shadowEffect
          width="100%"
          opacity="0.75"
          height="50rem"
          bgColor="#252525"
          imgUrl="https://steamuserimages-a.akamaihd.net/ugc/2010328424759555731/7167A3ECE235D7D7E9CDD5E866E9C556F20C22BD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        >
          <SectionContainer spacings="huge">
            <AboutContainer isColumn>
              <Typography
                as="h2"
                capitalize
                weight="500"
                size="medium"
                color="whiteColor"
              >
                Subscribe Now
              </Typography>

              <Typography as="h3" weight="500" size="xsmall" color="whiteColor">
                Be the first to know about our service updates and offers. Sign
                up for our mailling list so you dont miss our on anything.
              </Typography>

              <Typography
                as="h2"
                uppercase
                weight="500"
                size="small"
                color="blueColor"
              >
                Subscribe to our new Letter and be the First to Know
              </Typography>

              <InputContainer>
                <Input type="email" placeholder="EMAIL" />
                <div
                  style={{
                    top: 0,
                    right: 0,
                    height: "100%",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  <Button size="medium">
                    <Typography
                      as="h4"
                      capitalize
                      weight="500"
                      size="xxsmall"
                      color="whiteColor"
                    >
                      Subscribe
                    </Typography>
                  </Button>
                </div>
              </InputContainer>
            </AboutContainer>
          </SectionContainer>
        </BackgroundContainer>

        <Footer />
      </ThemeProvider>
    </>
  );
}
