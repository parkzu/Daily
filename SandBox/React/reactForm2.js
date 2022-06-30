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
        const [phoneNumber, setPhoneNumber] = React.useState("");
        const [message, setMessage] = React.useState("");

        const handleSubmit = (event) => {
          event.preventDefault();
          alert(phoneNumber);
        };

        const handleChange = (event) => {
          if (event.target.value.startsWith(0)) {
            setMessage("Phone Number is valid");
            setPhoneNumber(event.target.value);
          } else if (event.target.value.length === 0) {
            setPhoneNumber("");
            setMessage("");
          } else {
            setMessage("Phone Number should starts with 0");
          }
        };

        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="phone">Phone Number: </label>
            <br />
            <input
              id="phone"
              name="phone"
              onChange={handleChange}
              value={phoneNumber}
            />
            <p>{message}</p>
            <br />
            <br />
            <button
              type="submit"
              disabled={
                !phoneNumber.length === 0 || message !== "Phone Number is valid"
              }
            >
              Submit
            </button>
            <p>{phoneNumber}</p>
          </form>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>
