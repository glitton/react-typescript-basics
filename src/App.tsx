import CoarseGoalList from "./components/CoarseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

export type CoarseGoal = {
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

  const handleDeleteGoal = (id: number) => {
    // console.log("this is the id", id);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CoarseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
