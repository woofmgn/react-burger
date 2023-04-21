import { AnyAction } from 'redux';
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCES
} from "../../../utils/constants";
import { ingredientsReducer, initialState } from './ingredientsReducer';

describe('ingredients Reducer', () => {
  const ingredients = {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0
  }

  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {} as AnyAction)).toEqual(initialState);
  })
  
  it('should GET_INGREDIENTS', () => {
    expect(ingredientsReducer(initialState, { 
      type: GET_INGREDIENTS 
    }))
      .toEqual({
        ...initialState, 
        feedRequest: true, 
        feedFailed: false
      })
  })

  it('should GET_INGREDIENTS_SUCCES', () => {
    expect(ingredientsReducer(initialState, { 
      type: GET_INGREDIENTS_SUCCES,
      data: [ingredients],
    }))
      .toEqual({
        ...initialState,
        feedRequest: false,
        data: [ingredients]
      })
  })

  it('should GET_INGREDIENTS_FAILED', () => {
    expect(ingredientsReducer(initialState, {
      type: GET_INGREDIENTS_FAILED,
    }))
      .toEqual({
        ...initialState,
        feedRequest: false,
        feedFailed: true,
      })
  })
})
