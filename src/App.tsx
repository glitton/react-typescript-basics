import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

type CoarseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CoarseGoal[]>([]);
  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CoarseGoal = {
        id: Math.random(),
        title: "Learn React with TS",
        description: "Learn this in depth",
      };
      return [...prevGoals, newGoal];
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
