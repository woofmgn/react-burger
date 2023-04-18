import { useMemo } from 'react';
import { TCard } from '../utils/@types';
import { useAppSelector } from './useAppSelector';

export const useOrderInfo = (order: string[]) => {
  const { data } = useAppSelector((state) => state.ingredientsReducer);

    const ingredients = useMemo(() => {
    if (data && order) {
      return data.filter((card) => order.includes(card._id));
    }
  }, [data, order]);

  const totalPrice = useMemo(() => {
    const ingrArr: TCard[] = [];
    if (order && data) {
      order.forEach((ingr) => {
        // eslint-disable-next-line array-callback-return
        data.find((card) => {
          if (ingr === card._id) {
            ingrArr.push(card);
          }
        });
      });
    }

    if (ingrArr) {
      return ingrArr.reduce((acc, item) => {
        return (acc += item.price);
      }, 0);
    }
  }, [data, order]);

  return {
    ingredients,
    totalPrice
  }
}