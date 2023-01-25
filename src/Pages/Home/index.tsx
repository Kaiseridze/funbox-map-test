import { useState } from "react";
import { Container, Sidebar, InteractiveMap } from "../../Components";

import "./Home.styles.scss";

const Home = () => {
  const defaultCenter = [59.93431286622302, 30.31946594757369];
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const handleMapMove = (e: any) => {
    const newCenter = e.get("newCenter");
    setMapCenter(newCenter);
  };

  return (
    <Container variant="m">
      <Sidebar mapCenter={mapCenter} />
      <InteractiveMap handleMapMove={handleMapMove} defaultCenter={mapCenter}/>
    </Container>
  );
};

export default Home;
