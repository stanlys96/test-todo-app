import React, { useState, useEffect } from 'react';
import Category from './components/Category';

export interface TodoList {
  id: number;
  name: string;
  status: string;
}

export default function Home() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [listItem, setListItem] = useState<string>("");
  let [currentId, setCurrentId] = useState<number>(0);
  const categories: string[] = ["todo", "in_progress", "done"];
  return (
    <div className="p-12 bg-slate-300 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">TODO LIST</h1>
      <div>
        <input
          className="rounded-md p-2 mr-3 focus:outline-none"
          type="text"
          placeholder="Add Task..."
          value={listItem}
          onChange={(e) => {
            setListItem(e.target.value);
          }}
        />
        <input className="cursor-pointer bg-blue-600 py-2 px-4 text-white rounded-xl" onClick={() => {
          if (listItem === "") return;
          const currentTodo: TodoList = {
            id: currentId,
            name: listItem,
            status: 'todo',
          }
          setTodoList([...todoList, currentTodo]);
          setCurrentId(currentId + 1);
          setListItem("");
        }} value="Add Task" type="button" />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-5 text-center">
        {
          categories.map((item) => {
            return <Category status={item} todoList={todoList} setTodoList={setTodoList}  />
          })
        }
      </div>
    </div>
  );
}
