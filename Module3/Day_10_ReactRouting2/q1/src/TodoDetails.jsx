import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const { todoId } = useParams(); 
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Todo not found");
        return res.json();
      })
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [todoId]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong> {todo.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TodoDetails;
