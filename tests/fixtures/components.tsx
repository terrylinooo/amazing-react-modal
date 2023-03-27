export const Form = () => {
  return (
    <div id="form">
      <div className="form-row">
        <label>Name</label>
        <input name="name" type="text" />
      </div>
      <div className="form-row">
        <label>Password</label>
        <input name="passeord" type="password" />
      </div>
      <div className="form-row">
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

export const Button = () => {
  return (
    <button id="test-button" type="button">
      Submit
    </button>
  );
};
