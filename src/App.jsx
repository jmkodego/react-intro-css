import { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseInput/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "g1", text: "Finish React in Kodego" },
    { id: "g2", text: "Finish React Intro CSS App" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ id: Math.random.toString(), text: enteredText });
      return updatedGoals;
    });
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseGoalList items={courseGoals} />
      </section>
    </div>
  );
}

export default App;
