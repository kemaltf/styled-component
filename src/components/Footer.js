import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg"></img>

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons></SocialIcons>
        </Flex>
        <p>&copy; 2023 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
