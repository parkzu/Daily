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
        const handleSubmit = (event) => {
          event.preventDefault();

          console.dir(event.target);
          alert(
            `FirstName: ${event.target[0].value}, LastName: ${event.target[1].value}`
          );
        };
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname" defaultValue="John" />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname" defaultValue="Doe" />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        );
      };
      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
