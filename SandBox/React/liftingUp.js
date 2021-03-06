<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const Id = ({ handleIdChange }) => {
        return (
          <>
            <label>ID: </label>
            <input onChange={handleIdChange} />
          </>
        );
      };

      const Password = ({ handlePasswordChange }) => {
        return (
          <>
            <label>PW: </label>
            <input type="password" onChange={handlePasswordChange} />
          </>
        );
      };

      const App = () => {
        const [id, setId] = React.useState("");
        const [password, setPassword] = React.useState("");

        const handleIdChange = (event) => {
          setId(event.target.value);
          console.log(`id length: ${event.target.value.length > 0}`);
        };

        const handlePasswordChange = (event) => {
          setPassword(event.target.value);
          console.log(`pw length: ${event.target.value.length > 0}`);
        };

        const handleLoginClick = () => {
          alert(`id: ${id}, pw: ${password}`);
        };
        return (
          <>
            <Id handleIdChange={handleIdChange} />
            <br />
            <Password handlePasswordChange={handlePasswordChange} />
            <button
              disabled={id.length === 0 && password.length === 0}
              onClick={handleLoginClick}
            >
              Login
            </button>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
