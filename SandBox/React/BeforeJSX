<!DOCTYPE html>
<html lang="en">
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <div id="root"></div>
    <script>
      const rootElement = document.getElementById("root");
      const element = React.createElement(
        "h1",
        {
          className: "title",
          children: ["Hello, world!", " It's me!", " good"] //배열을 쓰면 무한히 들어갈 수 있음
        }
        // "Hello, world?????" //props를 넣어줘도 3번째 null을 쓰면 3번째 인자를 보인다
      );
      ReactDOM.render(element, rootElement); //앞에 주입 뒤에가 root
    </script>
  </body>
</html>
