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
        const inputRef = React.useRef();
        const divRef = React.useRef();
        React.useEffect(() => {
          inputRef.current.focus();
          // document.getElementById("input").focus();

          setTimeout(() => {
            divRef.current.style.backgroundColor = "pink";
          }, 1000);
        }, []);
        return (
          <>
            <input ref={inputRef} />
            <div
              ref={divRef}
              style={{ height: 100, width: 300, backgroundColor: "brown" }}
            />
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
