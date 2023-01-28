import React, { FC, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { DropResult } from '@hello-pangea/dnd';

import { Input } from "../../UI";
import { SidebarItem } from "../../Components";
import reorderList from "../../Helpers/ReorderList";

import { ISidebar } from "./Sidebar.types";

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

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = reorderList(
      placemarks,
      result.source.index,
      result.destination.index
    );
    dispatch(updatePlacemarkState(items));
  };

  return (
    <div data-testid='sidebar-test' className="sidebar">
      <h1 className="sidebar__title">Добавьте новую точку (Нажмите Enter)</h1>
      <form className="sidebar-form" onSubmit={onSubmit}>
        <Input placeholder='Например: Точка 1' onChange={onChangeValue} value={title} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="sidebar-list"
              >
                {placemarks?.map((road, index: number) => (
                  <Draggable key={road.id} draggableId={road.id} index={index}>
                    {(provided) => (
                      <SidebarItem
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
