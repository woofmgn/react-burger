import { SET_INGREDIENTS } from "../../../utils/constants";
import { TDetails, TDetailsAction } from '../../actions/details';

type TDetailsState = {
  feedReq: boolean;
  feedRes: boolean;
  details: TDetails | null;
}

export const initialState: TDetailsState = {
  feedReq: false,
  feedRes: false,
  details: null,
};

export function detailsReducer(state = initialState, action: TDetailsAction): TDetailsState {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return {
        ...state,
        details: {
          name: action.name,
          imageLarge: action.imageLarge,
          calories: action.calories,
          proteins: action.proteins,
          fat: action.fat,
          carbohydrates: action.carbohydrates,
        },
      };
    }
    default: {
      return initialState;
    }
  }
}
