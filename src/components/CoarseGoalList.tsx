import CourseGoal from "./CourseGoal.tsx";
import { type CoarseGoal as CGoal } from "../App.tsx";

type CoarseGoalsListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
function CoarseGoalList({ goals, onDeleteGoal }: CoarseGoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        const { id, title, description } = goal;
        return (
          <li key={id}>
            <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
export default CoarseGoalList;
