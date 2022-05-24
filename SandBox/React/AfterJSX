<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <div id="root"></div>
    <script type="text/babel">
      //자바스크립트가 읽을 스크립트와 바벨이 읽을 스크립트를 맞춰준다(컴파일)
      const rootElement = document.getElementById("root");

      const text = "Hello world!";
      const titleClassName = "title";
      const props = { className: titleClassName, children: text };

      const customH1 = <h1 {...props} />; // spread연산자 ...은 요소를 분해해서 보여줌
      //JSX에서는 태그 닫는것 없이 children으로 props 넘기기 가능
      // const customH1 = (
      //   <h1 className={props.className} children={props.children} />
      // ); 위와 같은 코드

      const element = customH1; // 변수 사용
      // const element = <h1 className="title">Hello, world!</h1>;
      // const element = <h1 className={titleClassName}>{text}</h1>; //변수 사용 가능
      ReactDOM.render(element, rootElement);
    </script>
  </body>
</html>
