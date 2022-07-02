<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      class ErrorBoundray extends React.Component {
        state = { error: null };
        static getDerivedStateFromError(error) {
          return { error };
        }

        render() {
          const { error } = this.state;
          if (error) {
            return this.props.fallback;
          }
          return this.props.children;
        }
      }

      const Fallback = () => {
        return <p>THERE is some ERROR...</p>;
      };

      const Child = () => {
        throw new Error("Something Wrong....");
        return <p>Child...</p>;
      };
      const App = () => {
        return (
          <>
            <p>App</p>
            <ErrorBoundray fallback={<Fallback />}>
              <Child />
            </ErrorBoundray>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
