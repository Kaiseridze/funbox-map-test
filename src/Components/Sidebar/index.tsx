import React, { useState } from "react";
import { Input } from "../../UI";
import { RoadMap } from "../../Entities";
import { IRoadMap } from "../../Entities/RoadMap/RoadMap.types";
import id from "../../Helpers/IdGenerator";
import "./Sidebar.styles.scss";
const Sidebar = () => {
  const [roads, setRoads] = useState<IRoadMap[]>([]);
  const [text, setText] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRoads([
      ...roads,
      {
        title: text,
        id: id(),
      },
    ]);
    setText("");
  };

  const onRemove = (id: string) => {
    const filteredRoads = roads.filter((road) => road.id !== id);
    setRoads(filteredRoads);
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Добавьте новую точку</h1>
      <form className="sidebar__form" onSubmit={onSubmit}>
        <Input onChange={onChangeValue} value={text} />
        {roads.map((road) => (
          <RoadMap
            onClick={() => onRemove(road.id)}
            id={road.id}
            key={road.id}
            title={road.title}
          />
        ))}
      </form>
    </div>
  );
};

export default Sidebar;
