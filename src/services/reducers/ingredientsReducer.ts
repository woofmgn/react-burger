import { TCard } from '../../utils/@types';
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCES,
} from "../../utils/constants";
import { IGetIngredientsActions } from '../actions/getIngredients';

type TIngredientsState = {
  feedRequest: boolean;
  feedFailed: boolean;
  data: TCard[] | null;
}

const initialState: TIngredientsState = {
  feedRequest: false,
  feedFailed: false,
  data: null,
};

export const ingredientsReducer = (
  state = initialState, 
  action: IGetIngredientsActions
  ): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCES: {
      return {
        ...state,
        data: action.data,
        feedRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
