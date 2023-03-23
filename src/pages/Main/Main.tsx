import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BurgerConstructor } from "../../Components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../../Components/BurgerIngredients/BurgerIngredients";

export const Main: FC = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </>
  );
};
