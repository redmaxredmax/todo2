"use client";
import { TodoData } from "@/types/todo";
import React, { startTransition } from "react";
import { deleteData, editData } from "@/service/todo";

export const Card: React.FC<TodoData> = ({ title, description, id }) => {
  const [loading, setLoading] = React.useTransition();
  const deleteItem = async () => {
    startTransition(() => deleteData(id));
  };
  const editItem = async () => {
    const title:any = prompt("Enter Title");
    const description:any = prompt("Enter Description");
    editData(id, title, description);
  };

  return (
    <div className="pl-10">
      <h1 className="text-blue-500 text-2xl">{title}</h1>
      <p className="text-red-500 text-xl">{description}</p>
      <button onClick={deleteItem}>{loading ? "Loading..." : "Delete"}</button>
      <button onClick={editItem}>Edit</button>
    </div>
  );
};
