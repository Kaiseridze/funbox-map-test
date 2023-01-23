import React, { useState } from "react";

import { Input } from "../../UI";
import { RoadMap } from "../../Entities";

import { useAppDispatch } from "../../Store/Hooks/useAppDispatch";
import { useAppSelector } from "../../Store/Hooks/useAppSelector";
import { addPlacemark, removePlacemark } from "../../Store/Reducers/placemarkSlice";

import id from "../../Helpers/IdGenerator";
import "./Sidebar.styles.scss";


const Sidebar = ({mapCenter}: any) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");

  const { placemarks } = useAppSelector((state) => state.placemarks);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length) {
      dispatch(
        addPlacemark({
          title: title,
          id: id(),
          coordinates: mapCenter
        })
      );
      setTitle("");
    }
  };

  const onRemove = (id: string) => {
    dispatch(removePlacemark(id))
  }

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Добавьте новую точку</h1>
      <form className="sidebar-form" onSubmit={onSubmit}>
        <Input onChange={onChangeValue} value={title} />
        <ul className="sidebar-list">
          {placemarks.map((road) => (
            <RoadMap onClick={() => onRemove(road.id)} id={road.id} key={road.id} title={road.title} />
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Sidebar;
