<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const Paint = ({ title, description, children }) => {
        return (
          <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            {children}
          </>
        );
      };

      const Good = () => <h3>Good</h3>;

      const element = (
        <>
          <Paint title="Good" description="good">
            <Good />
            <Good />
            <Good />
          </Paint>
        </>
      ); //children을 제약없이 사용 가능
      ReactDOM.render(element, rootElement);
    </script>
  </body>
</html>
