import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";

const ImageCarrouse = styled.img`
  width: 100%;
  height: 100%;
  background: linear-gradient(#006ded 0%, #1bace2 34.48%, #00e2ed 100%);
`;

type ImageContainerProps = {
  url: string;
};

const ImageContainerWithGradient = styled.div<ImageContainerProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: linear-gradient(to bottom, #cca36e, #681c1c16),
    url(${(props) => props.url});
`;

const CarouselComp = () => {
  return (
    <Carousel height={"500px"} indicators={false} autoPlay={true}>
      <ImageContainerWithGradient url="/images/slidebar1.jpg"></ImageContainerWithGradient>
      <ImageContainerWithGradient url="/images/carousel5.png"></ImageContainerWithGradient>
      <ImageContainerWithGradient url="/images/tribunales.jpg"></ImageContainerWithGradient>
      <ImageContainerWithGradient url="/images/paginatia.png"></ImageContainerWithGradient>
    </Carousel>
  );
};

export default CarouselComp;
