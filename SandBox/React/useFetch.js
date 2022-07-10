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
        const [data, setData] = React.useState(null);

        React.useEffect(() => {
          fetch(
            "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (myJson) {
              console.log(JSON.stringify(myJson));
            });
        }, []);
        return (
          <div>
            <p>People</p>
          </div>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
