const Person = ({ name, age, hobbies }) => {
  const voteText = age >= 18 ? "Please go vote!" : "You must be 18!";
  if (name.length > 8) {
    name = name.slice(0, 6);
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <h1>{name}</h1>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
      <h3>{voteText}</h3>
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
