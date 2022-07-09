<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const Id = () => {
        const [id, setId] = React.useState("");

        const handleIdChange = (event) => {
          setId(event.target.value);
          console.log(`length: ${event.target.value.length > 0}`);
        };
        return (
          <>
            <label>ID: </label>
            <input onChange={handleIdChange} />
          </>
        );
      };

      const Password = () => {
        const [password, setPassword] = React.useState("");

        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
          console.log(`length: ${event.target.value.length > 0}`);
        };
        return (
          <>
            <label>PW: </label>
            <input type="password" onChange={handlePasswordChange} />
          </>
        );
      };

      const App = () => {
        const handleLoginClick = () => {
          alert(`id: ${id}, pw: ${password}`);
        };
        return (
          <>
            <Id />
            <br />
            <Password />
            <button disabled={true} onClick={handleLoginClick}>
              Login
            </button>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
