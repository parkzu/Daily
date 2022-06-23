<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const Child = () => {
        console.log("   Child render start");
        const [text, setText] = React.useState(() => {
          console.log("   Child useState");
          return "";
        });

        React.useEffect(() => {
          console.log("   Child useEffect, no deps");
          return () => {
            console.log("   Child useEffect [Cleanup], no deps");
          };
        });

        React.useEffect(() => {
          console.log("   Child useEffect, empty deps");
          return () => {
            console.log("   Child useEffect [Cleanup], empty deps");
          };
        }, []);

        React.useEffect(() => {
          console.log("   Child useEffect, [text] deps");
          return () => {
            console.log("   Child useEffect [Cleanup], [text]");
          };
        }, [text]);

        function handleChange(event) {
          setText(event.target.value);
        }

        const element = (
          <>
            <input onChange={handleChange} />
            <p>{text}</p>
          </>
        );
        console.log("   Child render end");
        return element;
      };

      const App = () => {
        console.log("APP render start");
        const [show, setShow] = React.useState(() => {
          console.log("APP useState");
          return false;
        });
        React.useEffect(() => {
          console.log("APP useEffect, no deps");

          return () => {
            console.log("APP useEffect [Cleanup], no deps");
          };
        });

        React.useEffect(() => {
          console.log("APP useEffect, empty deps");

          return () => {
            console.log("APP useEffect [Cleanup], empty deps");
          };
        }, []);

        React.useEffect(() => {
          console.log("APP useEffect, [show]");
          return () => {
            console.log("APP useEffect [Cleanup], [show] deps");
          };
        }, [show]);

        function handleClick() {
          setShow((prev) => !prev);
        }

        console.log("APP render end");

        return (
          <>
            <button onClick={handleClick}>Search</button>
            {show ? <Child /> : null}
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
