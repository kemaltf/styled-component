import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
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
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
