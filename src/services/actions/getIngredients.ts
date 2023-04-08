import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCES,
} from "../../utils/constants";

import { api } from "../../api/Api";
import { TCard } from '../../utils/@types';
import { AppDispatch } from '../store';

interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS;
}

interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

interface IIGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCES;
  data: TCard[];
}

export type IGetIngredientsActions = 
  | IGetIngredientsAction
  | IGetIngredientsFailedAction
  | IIGetIngredientsSuccessAction;

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS,
})

export const getIngredientsSuccessAction = (res: TCard[]): IIGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCES,
  data: res
})

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED
})

  export const getIndredients = () => (dispatch: AppDispatch) => {
    dispatch(getIngredientsAction());
    api
      .getData()
      .then((res) => {
        if (res && res.success) {
          dispatch(getIngredientsSuccessAction(res.data));
        } else {
          dispatch(getIngredientsFailedAction());
        }
      })
      .catch((err) => {
        dispatch(getIngredientsFailedAction());
      });
  };
