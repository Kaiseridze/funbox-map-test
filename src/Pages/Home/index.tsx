import { useState } from "react";
import { Container, Sidebar, InteractiveMap } from "../../Components";

import "./Home.styles.scss";

const Home = () => {
  const defaultCenter = [55.75, 37.57];
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
