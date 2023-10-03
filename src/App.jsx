import { useEffect } from "react";
import generateRecipesByMonster from "./utilities/generateRecipesByMonster";

function App() {
  useEffect(() => {
    generateRecipesByMonster();
  }, []);

  return (
    <div>
      <p>Hello GreatTree!</p>
    </div>
  );
}

export default App;
