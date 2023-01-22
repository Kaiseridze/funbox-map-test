import React, { useState } from "react";
import { Input } from "../../UI";
import { RoadMap } from "../../Entities";
import "./Sidebar.styles.scss";
const Sidebar = () => {
  const [roads, setRoads] = useState<any>([]);
  const [text, setText] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRoads((prev: any) => [...prev, text]);
    setText("");
  };

  const onRemove = (id: string) => {
    const filteredRoads = roads.filter(
      (road: string, i: number) => road + i !== id
    );
    setRoads(filteredRoads);
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Добавьте новую точку</h1>
      <form className="sidebar__form" onSubmit={onSubmit}>
        <Input onChange={onChangeValue} value={text} />
        {roads.map((road: any, i: any) => (
          <RoadMap
            onClick={() => onRemove(road + i)}
            key={road + i}
            title={road}
          />
        ))}
      </form>
    </div>
  );
};

export default Sidebar;
