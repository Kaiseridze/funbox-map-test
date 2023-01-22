import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Container, Sidebar } from "../../Components";

import "./Home.styles.scss";

const Home = () => {
  return (
    <Container variant="m">
      <div className="home">
        <Sidebar />
        <YMaps>
          <div>
            My awesome application with maps!
            <Map defaultState={{ center: [59.5619,  30.1850], zoom: 9 }} />
          </div>
        </YMaps>
      </div>
    </Container>
  );
};

export default Home;
