import { AnyAction } from 'redux';
import { SET_INGREDIENTS } from "../../../utils/constants";
import { detailsReducer, initialState } from './detailsReduser';

describe('details Reducer', () => {
  const details = {
    name: 'Флюоресцентная булка R2-D3',
    imageLarge: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    calories: 643,
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
  }

  it('should return the initial state', () => {
    expect(detailsReducer(undefined, {} as AnyAction))
      .toEqual(initialState)
  })

  it('should SET_INGREDIENTS', () => {
    expect(detailsReducer(initialState, {
      type: SET_INGREDIENTS,
      ...details,
    }))
      .toEqual({
        ...initialState,
        details
      })
  })
})