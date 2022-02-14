import "./Todo.css";
export const Todo = (props) => {
  const { toDos, handleDeleteData } = props;
  const handleDeleteTodos = (toDoid) => {
    handleDeleteData(toDoid);
  };
  return (
    <div className="todo-container">
      <table>
        {toDos.map((item) => {
          <tr key={item.id}>
            <th>ID</th>
            <th>VALUE</th>
            <th>ACTION</th>
          </tr>;

          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td onClick={() => handleDeleteTodos(item.id)}>X</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
