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
      const element = (
        <>
          <button className="button" style={{ borderRadius: "50%" }}>
            Green
          </button>
          <button className="button blue" style={{ borderRadius: 8 }}>
            Blue
          </button>
          <button className="button red">Red</button>
          <button className="button gray">Gray</button>
          <button className="button black">Black</button>
        </>
      );

      ReactDOM.render(element, document.getElementById("root"));
    </script>
  </body>
</html>
