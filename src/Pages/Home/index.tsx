import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Container, Sidebar } from "../../Components";

import "./Home.styles.scss";

const Home = () => {
  return (
    <Container variant="m">
      <Sidebar />
      <YMaps>
        <Map className="map"  defaultState={{ center: [59.5619, 30.185], zoom: 9 }} />
      </YMaps>
    </Container>
  );
};

export default Home;
