"use server"
import { TodoData } from "@/types/todo";
import { revalidateTag } from "next/cache";

export const getData = async (): Promise<TodoData[]> => {
    try {
        const res = await fetch("http://localhost:3600/todos", {
            next: {
                tags: ["todos"]
            }
        });
        const data = await res.json();
        return data
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const deleteData = async (id: number) => {
    try {
        const res = await fetch(`http://localhost:3600/todos/${id}`, {
            method: "DELETE",
        })
        const data = await res.json()
        revalidateTag("todos")
        return data
    } catch (error) {
        throw new Error("error")
    }
}
export const editData=async(id:number,title:string,description:string)=>{
    try {
        const res=await fetch(`http://localhost:3600/todos/${id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              title: title,
              description: description,
             }),
        })
        const data=await res.json()
        revalidateTag("todos");
        return data
    } catch (error) {
        throw new Error("error")
    }    
}

export const postTodos = async (data: { title: string, description: string }) => {
    try {
       
        const res = await fetch('http:localhost:3600/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({ ...data }),
        });
        const response = await res.json();
        revalidateTag('todos')
        return response;
    } catch (error) {
        throw new Error('Failed to post data');
    }
}