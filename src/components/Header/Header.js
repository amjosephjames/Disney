import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Wrapper>
        <LogoDiv>
          <Logo src="/Assets/images/logo.svg" alt="" />
        </LogoDiv>
        <Navigator>
          <Navs>
            <Nav>
              <Icon src="/Assets/images/home-icon.svg" alt="" />
              <span>Home</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/original-icon.svg" alt="" />
              <span>ORIGINAL</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </Nav>
          </Navs>

          <Avatar>
            <Image src="/Assets/images/pexels-photo-2007647.webp" alt="" />
          </Avatar>
        </Navigator>
        <BuggerHold>
          {toggle ? (
            <GoThreeBars onClick={toggleChange} font-size="40px" color="#fff" />
          ) : (
            <div>
              <GiCancel onClick={toggleChange} font-size="40px" color="#fff" />
              <SideBar />
            </div>
          )}
        </BuggerHold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #122e40;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const Navigator = styled.div`
  width: 80%;
  display: flex;
  // flex: 0;
  justify-content: space-between;
  align-items: center;
  // background-color: red;
  margin: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LogoDiv = styled.div`
  margin-right: 40px;
`;

const Logo = styled.img`
  width: 100px;
`;
const Navs = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  /* font-family: moo lah lah; */
  span {
    margin-left: 3px;
    cursor: pointer;
    position: relative;
    transition: all 350ms;
    ::after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #fff;
      left: 0;
      right: 0;
      bottom: -7px;
      opacity: 0;
      transition: all 350ms;
    }

    :hover {
      transform: scale(1.1);
      ::after {
        opacity: 1;
      }
    }
  }
`;
const Icon = styled.img`
  width: 20px;
`;
const Avatar = styled.div`
  width: 50px;
`;
const BuggerHold = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 360px;
`;
