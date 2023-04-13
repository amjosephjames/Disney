import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Carosel {...settings}>
        <Wrap>
          <a>
            <img src="/Assets/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/Assets/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/Assets/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/Assets/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carosel>
    </Container>
  );
};

export default Slides;

const Container = styled.div``;

const Carosel = styled(Slider)`
overflow: hidden;
  & > button{
    height: 100%;
    width: 5vw;
    z-index: 1;
    opacity: 0;

    :hover{
      opacity: 1;
    }
  }
  ul li button{
      &::before{
        font-size: 10px;
        color: rgb(150, 158, 171);
      }
  }
  li.slick-active{
    color: white;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    /* padding: 4px; */
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

