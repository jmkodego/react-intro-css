import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./CourseInput.css";
import { FormControl } from "./styled";

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
      <FormControl invalid={!isValid}>
        <label htmlFor="course-goal">Course Goal</label>
        <input
          type="text"
          id="course-goal"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
