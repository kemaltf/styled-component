import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg"></Logo>
          <Button>Try it free!</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              felis a eros finibus condimentum ac quis orci. Pellentesque sed
              euismod dolor. Etiam vitae velit urna. Nunc in lorem laoreet,
              faucibus tellus nec, imperdiet diam. Integer dignissim efficitur
              lectus at faucibus.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/telescope.png" alt=""></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
