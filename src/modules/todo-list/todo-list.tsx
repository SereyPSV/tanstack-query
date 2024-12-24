import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "./api";


export function TodoList() {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: todoListApi.getLogoList
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      Todo List
      {data.map(todo => (
        <div key={todo.id}> {todo.text} </div>
      ))}
    </div>
  );
}
