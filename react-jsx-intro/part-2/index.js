const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h2>
        {username} <small>aka. {name}</small>
      </h2>
      <p>{message}</p>
      <h4>{date}</h4>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Tweet
        username="Abominable"
        name="Abby"
        date="05/08/2023"
        message="My first tweet!"
      />
      <Tweet
        username="Maharaja"
        name="Cleo"
        date="05/06/2023"
        message="Cleo's Tweet!"
      />
      <Tweet
        username="Hamtaro"
        name="Hammy"
        date="05/03/2023"
        message="Ham Ham Hamtaro!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
