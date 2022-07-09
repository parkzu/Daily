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
        return (
          <>
            <label>ID: </label>
            <input />
          </>
        );
      };

      const Password = () => {
        return (
          <>
            <label>PW: </label>
            <input />
          </>
        );
      };

      const App = () => {
        return (
          <>
            <Id />
            <br />
            <Password />
            <button disabled={true}>Login</button>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
