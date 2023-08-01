import React from "react";
import { StyledHeader,Logo,Nav,Image } from "./styles/Header.styled";
import Container from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader bg={"green"}>
      <Container>
       <Nav>
        <Logo src="./images/logo.svg" alt=""/>
        <Button>Try it Free</Button>
       </Nav>
       <Flex>
        <div>
        <h1>
            Build The Communinty Your Fans Will Love
        </h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quod optio ipsam?
        </p>
        <Button bg="#ff0099" color="white">Get Started For Free</Button>
        </div>
        <Image src="./images/illustration-mockups.svg" />
       </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
