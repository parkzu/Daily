<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      class ErrorBoundary extends React.Component {
        //class 로 선언
        state = { error: null };
        static getDerivedStateFromError(error) {
          return { error };
        }

        render() {
          const { error } = this.state;
          if (error) {
            return <p>There is some error...</p>;
          }
          return this.props.children;
        }
      }

      const Child = () => {
        throw new Error("Something Wrong....");
        return <p>Child...</p>;
      };
      const App = () => {
        return (
          <>
            <p>App</p>
            <ErrorBoundary>
              <Child />
            </ErrorBoundary>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
