import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './theme';


import styled from "styled-components";


const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  color: ${({ theme }) => theme.textTitle};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`;

const Title = styled.h1`
  font-size: 1.98818rem;
  line-height: 2.625rem;
  margin-bottom: 0;
  margin-top: 0;
  font-family: 'Montserrat', sans-serif;
`;

const ButtonToggle = styled.div`
  display: inline-block;
` ;

const Btn = styled.button`
 background-color: #282c35;
 width: 80px;
 height: 50px;
 background-image: ${({ theme }) => theme.bgImage};
 background-repeat: no-repeat;
 background-position: center;
 border-radius: 25px;
 border: none;
`;

const PresentationWrapper = styled.div`
  display: block;
`

const Presentation = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
  max-width: 310px;
  align-items: center;
  font-family: 'Merriweather', serif;
`;

const ProfileImg = styled.img`
  margin-right: 0.875rem;
  margin-bottom: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.textLink};
  text-decoration: underline;
`;

const Article = styled.article`
  display: block;
  
   h3{
    color: ${({ theme }) => theme.textLink};
   }

   p{
     font-size: 20px;
   }
`;

const TitleArticle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  margin-bottom: 0.4375rem;
`;

const Small = styled.small`
  font-size: 80%;
  font-family: 'Merriweather', serif;
`;



function App() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Main>
        <Container>

          <Header>
            <Title>DarkMode</Title>
            <ButtonToggle>
              <Btn onClick={() => setDarkMode(!darkMode)}></Btn>
            </ButtonToggle>
          </Header>

          <PresentationWrapper>
            <Presentation>
              <ProfileImg src="https://www.occhialivip.it/wp-content/uploads/occhiali-johnny-depp-paura-e-delirio-a-las-vegas.jpg" alt="Paura e delirio a las vegas"></ProfileImg>
              <p>Personal blog by <Link href="https://www.youtube.com/watch?v=L-49JQAF49I">Raoul Duke</Link>. I explain with words and code.</p>
            </Presentation>
          </PresentationWrapper>

          <Article>
            <TitleArticle>Lorem Ipsum</TitleArticle>
            <Small>July 7, 2021 • ☕️☕️☕️ 14 min read</Small>
            <p>Nulla sollicitudin quis erat egestas vehicula.</p>
          </Article>

          <Article>
            <TitleArticle>Lorem Ipsum</TitleArticle>
            <Small>July 7, 2021 • ☕️☕️☕️ 14 min read</Small>
            <p>Nulla sollicitudin quis erat egestas vehicula.</p>
          </Article>

          <Article>
            <TitleArticle>Lorem Ipsum</TitleArticle>
            <Small>July 7, 2021 • ☕️☕️☕️ 14 min read</Small>
            <p>Nulla sollicitudin quis erat egestas vehicula.</p>
          </Article>

          <Article>
            <TitleArticle>Lorem Ipsum</TitleArticle>
            <Small>July 7, 2021 • ☕️☕️☕️ 14 min read</Small>
            <p>Nulla sollicitudin quis erat egestas vehicula.</p>
          </Article>

        </Container>
      </Main>

    </ThemeProvider>

  );
}

export default App;
