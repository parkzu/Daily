<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const todos = [
        { id: 1, value: "Wash dishies" },
        { id: 2, value: "Clean the bed" },
        { id: 3, value: "Running" },
        { id: 4, value: "Learning" }
      ];

      const App = () => {
        const [items, setItems] = React.useState(todos);

        const handleDoneClick = (todo) => {
          setItems((items) => items.filter((item) => item !== todo));
        };

        const handleRestoreClick = () => {
          setItems((items) => [
            ...items,
            todos.find((item) => !items.includes(item))
          ]);
        };

        return (
          <>
            {items.map((todo) => (
              <div>
                <span>{todo.value}</span>
                <button onClick={() => handleDoneClick(todo)}>Done</button>
              </div>
            ))}
            <button onClick={handleRestoreClick}>Restore</button>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
