import React, { useState, useEffect } from 'react';

interface TodoList {
  id: number;
  name: string;
}

export default function Home() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [listItem, setListItem] = useState<string>("");
  let [currentId, setCurrentId] = useState<number>(0);
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
            name: listItem
          }
          setTodoList([...todoList, currentTodo]);
          setCurrentId(currentId + 1);
          setListItem("");
        }} value="Add Task" type="button" />
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {
          todoList.map((item, index) => {
            return <div className="px-7 py-14 bg-white rounded-xl text-center relative overflow-hidden text-ellipsis" key={item.id}>
              <span onClick={() => {
                for (let i = 0; i < todoList.length; i++) {
                  if (item.id === todoList[i].id) {
                    setTodoList(todoList.filter(x => x.id != item.id));
                    break;
                  }
                }
              }} className="cursor-pointer absolute top-2.5 right-4 text-red-600 font-bold">X</span>
              <span className="text-3xl">{item.name}</span>
            </div>
          })
        }
      </div>
    </div>
  );
}
