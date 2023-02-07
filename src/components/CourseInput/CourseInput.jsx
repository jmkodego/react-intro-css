import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 3) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
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
