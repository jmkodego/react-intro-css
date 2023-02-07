import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="course-goal">Course Goal</label>
        <input
          type="text"
          id="course-goal"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <button type="submit" className="button">
        Add Goal
      </button>
    </form>
  );
};

export default CourseInput;
