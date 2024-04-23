"use client";
import React from "react";
import { postTodos } from "@/service/todo";
import { useForm } from "react-hook-form";

interface inputProps {
  title: string;
  description: string;
}

export const Form: React.FC = () => {
  const { register, handleSubmit,reset } = useForm<inputProps>();
  const submit = async (data: inputProps) => {
    await postTodos(data)
    reset()
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit(submit)}>
      <div>
        <input
          {...register("title", { required: true })}
          className="border border-blue-400"
          name="title"
          type="text"
        />
      </div>
      <div>
        <input
          {...register("description", { required: true })}
          className="border border-blue-400"
          name="description"
          type="text"
        />
      </div>
      <button className="px-5 py-2 bg-blue-400" type="submit">
        send
      </button>
    </form>
  );
};
