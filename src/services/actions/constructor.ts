import { v4 as uuid } from "uuid";
import { TCard } from '../../utils/@types';
import {
  ADD_INGREDIENTS,
  REMOVE_ALL_INGREDIENTS,
  REMOVE_INGREDIENTS,
  REPLASE_INGREDIENT,
} from "../../utils/constants";

export type TIngredients = {
  imageLarge: string;
  types?: string;
  keyId: string;
} & TCard;

export interface IAddIngredientsAction extends TIngredients {
  readonly type: typeof ADD_INGREDIENTS;
}

export interface IRemoveIngredientsAction {
  readonly type: typeof REMOVE_INGREDIENTS;
  keyId: string;
}

export interface IRemoveAllIngredientsAction {
  readonly type: typeof REMOVE_ALL_INGREDIENTS
  ingredients: [];
}

export interface IReplaceIngredientAction {
  readonly type: typeof REPLASE_INGREDIENT
  dragItem: string;
  hoverItem: string;
}

export type TConstructorActions = 
  | IAddIngredientsAction
  | IRemoveIngredientsAction
  | IRemoveAllIngredientsAction
  | IReplaceIngredientAction;

export const addIngredients = (payload: TIngredients): IAddIngredientsAction => ({
  type: ADD_INGREDIENTS,
  _id: payload._id,
  name: payload.name,
  price: payload.price,
  image: payload.image,
  imageLarge: payload.imageLarge,
  calories: payload.calories,
  proteins: payload.proteins,
  fat: payload.fat,
  carbohydrates: payload.carbohydrates,
  types: payload.type,
  keyId: uuid(),
});

export const removeIngredients = (keyId: string): IRemoveIngredientsAction => ({
  type: REMOVE_INGREDIENTS,
  keyId: keyId,
});

export const removeAllIngredients = (): IRemoveAllIngredientsAction => ({
  type: REMOVE_ALL_INGREDIENTS,
  ingredients: [],
});

export const replaceIngredient = (payload: any): IReplaceIngredientAction => {
  return {
    type: REPLASE_INGREDIENT,
    dragItem: payload.item.keyId,
    hoverItem: payload.keyId,
  };
};
