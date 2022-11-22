import { TodoList } from "../index";

interface CategoryProps {
  status: string;
  todoList: TodoList[];
  setTodoList: (params: any) => void;
}

export default function Category(props: CategoryProps) {
  return <div>
          <div className="p-3 bg-white rounded-xl">
            <p>{props.status}</p>
          </div>
          <div className="mt-5">
          {
            props.todoList.map((item, index) => {
              return item.status === props.status && <div className="px-7 py-14 bg-white rounded-xl text-center relative overflow-hidden text-ellipsis">
                <select onChange={(e) => {
                  let todoListTemp = props.todoList;
                  let theIndex = todoListTemp.findIndex((element) => element.id === item.id);
                  todoListTemp[theIndex].status = e.target.value;
                  props.setTodoList([...todoListTemp]);
                }} className="form-select d-inline-block" aria-label="Default select example">
                  <option selected={item.status === "todo"} value="todo">Todo</option>
                  <option selected={item.status === "in_progress"} value="in_progress">In Progress</option>
                  <option selected={item.status === "done"} value="done">Done</option>
                </select>
                <span className="cursor-pointer absolute top-2.5 right-4 text-red-600 font-bold">X</span>
                <span className="text-3xl">{item.name}</span>
              </div>
            })
          }
          </div>
        </div>
}