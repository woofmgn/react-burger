import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BurgerConstructor } from "../../Components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../../Components/BurgerIngredients/BurgerIngredients";
import { Loader } from "../../Components/Loader/Loader";
import { useAppSelector } from "../../hooks/useAppSelector";

export const Main: FC = () => {
  const { feedRequest } = useAppSelector((state) => state.ingredientsReducer);

  return (
    <>
      {feedRequest ? (
        <Loader />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </>
  );
};
