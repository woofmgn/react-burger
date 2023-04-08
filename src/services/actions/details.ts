import { RESET, SET_INGREDIENTS } from "../../utils/constants";

export type TDetails = {
  name: string;
  imageLarge: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

export interface ISetDetailsAction extends TDetails {
  readonly type: typeof SET_INGREDIENTS;
}

export interface IResetDetails {
  readonly type: typeof RESET;
}

export type TDetailsAction = ISetDetailsAction | IResetDetails;

export const setDetails = (payload: TDetails): ISetDetailsAction => ({
  type: SET_INGREDIENTS,
  name: payload.name,
  imageLarge: payload.imageLarge,
  calories: payload.calories,
  proteins: payload.proteins,
  fat: payload.fat,
  carbohydrates: payload.carbohydrates,
});

export const resetDetails = (): IResetDetails => ({
  type: RESET,
});
