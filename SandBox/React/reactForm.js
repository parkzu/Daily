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
        return (
          <form action="/action_page.php">
            <label for="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname" value="John" />
            <br />
            <label for="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname" value="Doe" />
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
