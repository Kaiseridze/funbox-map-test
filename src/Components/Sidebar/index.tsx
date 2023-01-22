import React from "react";
import { Input } from "../../UI";
import "./Sidebar.styles.scss";
const Sidebar = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Добавьте новую точку</h1>
      <form className="sidebar__form" onSubmit={onSubmit}>
        <Input />
      </form>
    </div>
  );
};

export default Sidebar;
