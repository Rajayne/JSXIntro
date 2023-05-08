const FirstComponent = () => <h1>My very first component</h1>;

const NamedComponent = (props) => <p>My name is {props.name}</p>;

const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Jade" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
