"use client";
import React from "react";
import { postTodos } from "@/service/todo";
import { useForm } from "react-hook-form";

interface inputProps {
  title: string;
  description: string;
}

export const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<inputProps>();
  const [loading, setLoading] = React.useTransition();
  const submit = async (data: inputProps) => {
    setLoading(() => postTodos(data));
    reset();
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(submit)}
    >
      <div>
        <input
          {...register("title", { required: true })}
          className=" outline-none rounded-xl px-3 py-[6px]  mb-3 w-[400px] border-2 border-blue-400 focus:border-blue-700"
          name="title"
          type="text"
          placeholder="Enter Title"
        />
      </div>
      <div>
        <input
          {...register("description", { required: true })}
          className=" outline-none rounded-xl px-3 py-[6px]  mb-2 w-[400px] border-2 border-blue-400 focus:border-blue-700"
          name="description"
          type="text"
          placeholder="Enter Description"
        />
      </div>
      <button
        className="rounded-xl w-[400px] py-1 text-lg font-semibold text-white bg-blue-600 hover:text-blue-900 hover:bg-blue-400"
        type="submit"
      >
        {loading?"Posting...":"Post"}
      </button>
    </form>
  );
};
