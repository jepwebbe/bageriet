import React from "react";
import { Page } from "../../Layout/Page";
import News from "./News";

import Image1 from "../../../../Assets/images/slide1.jpg";
import Image2 from "../../../../Assets/images/slide2.jpg";
import Image3 from "../../../../Assets/images/slide3.jpg";
import Slider from "./Slider";
import Newsletter from "./Newsletter";

const imageData = [{ image: Image1 }, { image: Image2 }, { image: Image3 }];

const Home = () => {
  return (
    <Page
      title="Bageriet, velkommen til"
      description="Dette er Bageriets hjemmeside"
    >
      <Slider slides={imageData} />
      <News />
      <Newsletter />
    </Page>
  );
};

export default Home;
