import React from "react";
import styled from "styled-components";
import { BiPlay, BiPlusCircle } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import data from "../Data.json";

const Details = () => {
  const { id } = useParams();

  const newId = data[id - 1];

  return (
    <Container>
      <Wrapper>
        {
          <div>
            <Background>
              <img src={newId.backgroundImg} />
            </Background>
            <Margin>
              <Title>
                <img src={newId.titleImg} alt="" />
              </Title>
              <Holder>
                <IconHolder>
                  <Icon1>
                    <BiPlay color="#000" size="60px" />
                    <div>Play</div>
                  </Icon1>
                  <Icon2>
                    <BiPlay size="60px" />
                    <div>Trailler</div>
                  </Icon2>
                  <Icon3>
                    <BiPlusCircle size="50px" />
                  </Icon3>
                  <Icon4 to="/">Go back</Icon4>
                </IconHolder>
                <Period>{newId.subTitle}</Period>
                <Discription>{newId.description}</Discription>
              </Holder>
            </Margin>
          </div>
        }
      </Wrapper>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  /* background: url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg'); */
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  /* margin-left: 40px; */
`;
const Background = styled.div`
  position: fixed;
  z-index: 0;
  img {
    width: 100vw;
    height: 100vh;
  }
`;
const Margin = styled.div`
  margin-left: 40px;
  position: relative;
`;

const Title = styled.div`
  margin: 0 10px;
  img {
    width: 350px;
    height: 300px;
  }
`;
const Holder = styled.div``;
const IconHolder = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Icon1 = styled.div`
  background-color: #fff;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  div {
    color: black;
    font-size: 20px;
    font-weight: 600;
    padding-right: 20px;
  }
`;
const Icon2 = styled.div`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 5px;

  div {
    color: white;
    font-size: 20px;
    font-weight: 600;
    padding-right: 10px;
  }
`;
const Icon3 = styled.div``;
const Icon4 = styled(Link)`
  background: white;
  text-decoration: none;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const Period = styled.div`
  margin-top: 40px;
`;
const Discription = styled.div`
  width: 600px;
  margin-top: 40px;
`;
