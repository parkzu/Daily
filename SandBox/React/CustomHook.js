<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      function useLocalStorage(itemName, value = "") {
        //값이 없으면 value, 즉 빈값
        const [state, setState] = React.useState(() => {
          console.log("initialize");
          return window.localStorage.getItem(itemName) || value;
        });

        React.useEffect(() => {
          window.localStorage.setItem(itemName, state);
        }, [state]);

        return [state, setState];
      }

      const App = () => {
        const [keyword, setKeyword] = useLocalStorage("keyword");
        const [result, setResult] = useLocalStorage("result");
        const [typing, setTyping] = useLocalStorage("typing", false);

        function handleChange(event) {
          window.localStorage.setItem("keyword", event.target.value);
          setKeyword(event.target.value);
          setTyping(true);
        }

        function handleClick() {
          setTyping(false);
          setResult(`We find results of ${keyword}`);
        }

        return (
          <>
            <input onChange={handleChange} value={keyword} />
            <button onClick={handleClick}>search</button>
            <p>{typing ? `Looking for ${keyword}...` : result}</p>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
