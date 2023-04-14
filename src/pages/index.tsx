import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

import { Divider } from "../components/Divider";
import { Typography } from "../components/Typography";
import { TopContainer } from "../components/TopContainer";
import { BackgroundContainer } from "../components/BackgroundContainer";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopContainer />
        <BackgroundContainer imgUrl="https://i.pinimg.com/originals/fa/e1/1a/fae11a396752675907689eb268785a9a.png">
          <Typography type="text-uppercase">Buy a league of </Typography>
          <Typography type="title">Legends Account</Typography>
          <Divider />
        </BackgroundContainer>
      </ThemeProvider>
    </>
  );
}
