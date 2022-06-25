<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>
      .button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }

      .blue {
        background-color: #008cba;
      } /* Blue */
      .red {
        background-color: #f44336;
      } /* Red */
      .gray {
        background-color: #e7e7e7;
        color: black;
      } /* Gray */
      .black {
        background-color: #555555;
      } /* Black */
    </style>

    <script type="text/babel">
      function Button(props) {
        //props 안에는 className, style, children ...이 있음
        console.log(JSON.stringify(props));
        return <button className="button" {...props} />;
      }

      const element = (
        <>
          <Button className="button" style={{ borderRadius: "50%" }}>
            Green
          </Button>
          <Button className="button blue" style={{ borderRadius: 8 }}>
            Blue
          </Button>
          <Button className="button red">Red</Button>
          <Button className="button gray">Gray</Button>
          <Button className="button black">Black</Button>
        </>
      );

      ReactDOM.render(element, document.getElementById("root"));
    </script>
  </body>
</html>
