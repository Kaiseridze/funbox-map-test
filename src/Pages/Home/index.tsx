import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Container, Sidebar } from "../../Components";

import "./Home.styles.scss";

const Home = () => {
  return (
    <Container variant="m">
      <Sidebar />
      <YMaps
        query={{
          load: "package.full",
          apikey: "f6765f8c-c5ba-427a-ab3a-73957a80a660",
        }}
      >
        <Map
         className="map"
          defaultState={{ center: [59.5619, 30.185], zoom: 8 }}
        >
          <Placemark geometry={[59.938112, 30.31245]} />
        </Map>
      </YMaps>
    </Container>
  );
};

export default Home;
