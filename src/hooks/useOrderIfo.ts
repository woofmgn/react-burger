import { useMemo } from 'react';
import { useAppSelector } from './useAppSelector';

export const useOrderInfo = (order: string[]) => {
  const { data } = useAppSelector((state) => state.ingredientsReducer);

    const ingredients = useMemo(() => {
    if (data && order) {
      return data.filter((card) => order.includes(card._id));
    }
  }, [data, order]);

  const totalPrice = useMemo(() => {
    if (ingredients) {
      return ingredients.reduce((acc, item) => {
        if (item.type === "bun") {
          return (acc += item.price * 2);
        }
        return (acc += item.price);
      }, 0);
    }
  }, [ingredients]);

  return {
    ingredients,
    totalPrice
  }
}