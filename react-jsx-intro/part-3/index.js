const Person = ({ name, age, hobbies }) => {
  let add;
  if (age <= 18) {
    add = <h3>You must be 18</h3>;
  } else {
    add = <h3>Please go vote!</h3>;
  }

  if (name.length > 8) {
    name = name.slice(0, 6);
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <h1>{name}</h1>
      <p>{add}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Person
        name="Synthesia"
        age={26}
        hobbies={["soccer", "violin", "diving"]}
      />
      <Person
        name="Augustus"
        age={18}
        hobbies={["frisbee", "gardening", "biking"]}
      />
      <Person name="Chloe" age={13} hobbies={["video games", "anime"]} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
