"use client";
import { TodoData } from "@/types/todo";
import React, { startTransition } from "react";
import { deleteData, editData } from "@/service/todo";
import Image from "next/image";
// import edit from "@/assets/edit.svg"

export const Card: React.FC<TodoData> = ({ title, description, id }) => {
  const [loading, setLoading] = React.useTransition();
  const deleteItem = async () => {
    setLoading(() => deleteData(id));
  };
  const editItem = async () => {
    const title: any = prompt("Enter Title");
    const description: any = prompt("Enter Description");
    editData(id, title, description);
  };

  return (
    <div className="flex justify-between items-center py-3 border-b-2 border-blue-500">
      <div className="pl-3">
        <h1 className="text-blue-500 text-2xl">
          <span className="font-semibold">Title:</span> {title}
        </h1>
        <p className="text-red-500 text-xl"><span className="font-semibold">Desc:</span> {description}</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-600 py-1 hover:bg-blue-500 text-white font-semibold px-1 rounded-md" onClick={deleteItem}>
          {loading ? "Deleting..."  : "Delete"}
        </button>
        <button className="bg-red-600 py-1 text-white font-semibold px-2 rounded-md" onClick={editItem}>Edit</button>
      </div>
    </div>
  );
};
