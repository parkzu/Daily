<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const App = () => {
        const [show, setShow] = React.useState(false);

        function handleClick() {
          setShow((prev) => !prev); //입력받은 값의 반대로 변환
        }

        return (
          <>
            <button onClick={handleClick}>Search</button>
            {show ? (
              <>
                <input />
                <p></p>
              </>
            ) : null}
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
