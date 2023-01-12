import React from "react";
import { Page } from "../../App/Layout/Page";
import News from "./News";

import Image1 from "../../../Assets/images/slide1.jpg";
import Image2 from "../../../Assets/images/slide2.jpg";
import Image3 from "../../../Assets/images/slide3.jpg";
import Slider from "./Slider";
import Newsletter from "./Newsletter";
import NewBread from "./NewBread";

// Array for the slider component
const imageData = [{ image: Image1 }, { image: Image2 }, { image: Image3 }];

const Home = () => {
  return (
    <Page
      title="Bageriet: Velkommen til"
      description="Dette er Bageriets hjemmeside"
    >
      <Slider slides={imageData} />
      <div className="wrapView">
        <News />
        <Newsletter />
        <NewBread />
      </div>
    </Page>
  );
};

export default Home;
