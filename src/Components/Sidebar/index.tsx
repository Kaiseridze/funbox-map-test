import React, { FC, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

import { Input } from "../../UI";
import { RoadMap } from "../../Entities";

import { ISidebar } from "./Sidebar.types";
import { IPlacemark } from "../../Store/Reducers/placemarkSlice/placemarkSlice.types";

import id from "../../Helpers/IdGenerator";

import { useAppDispatch } from "../../Store/Hooks/useAppDispatch";
import { useAppSelector } from "../../Store/Hooks/useAppSelector";
import {
  addPlacemark,
  removePlacemark,
  updatePlacemarkState,
} from "../../Store/Reducers/placemarkSlice";

import "./Sidebar.styles.scss";


const Sidebar: FC<ISidebar> = ({ mapCenter }) => {
  const dispatch = useAppDispatch();
  const { placemarks } = useAppSelector((state) => state.placemarks);
  const [title, setTitle] = useState<string>("");

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
          coordinates: mapCenter,
        })
      );
      setTitle("");
    }
  };

  const onRemove = (id: string) => {
    dispatch(removePlacemark(id));
  };

  const reorderList = (
    list: IPlacemark[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = reorderList(
      placemarks,
      result.source.index,
      result.destination.index
    );
    dispatch(updatePlacemarkState(items));
  };

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Добавьте новую точку</h1>
      <form className="sidebar-form" onSubmit={onSubmit}>
        <Input onChange={onChangeValue} value={title} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="sidebar-list"
              >
                {placemarks.map((road, index: number) => (
                  <Draggable key={road.id} draggableId={road.id} index={index}>
                    {(provided) => (
                      <RoadMap
                        draggableProps={provided.draggableProps}
                        dragHandleProps={provided.dragHandleProps}
                        reference={provided.innerRef}
                        onClick={() => onRemove(road.id)}
                        id={road.id}
                        title={road.title}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </form>
    </div>
  );
};

export default Sidebar;
