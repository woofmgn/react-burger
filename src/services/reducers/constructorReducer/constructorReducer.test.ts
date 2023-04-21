
import {
  ADD_INGREDIENTS, REMOVE_ALL_INGREDIENTS, REMOVE_INGREDIENTS
} from "../../../utils/constants";
import { constructorReducer, initialState } from './constructorReducer';

describe('constructor Reducer', () => {
  const ingredient = {
    type: ADD_INGREDIENTS,
    _id: '643d69a5c3f7b9001cfa093d',
    name: 'Флюоресцентная булка R2-D3',
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    imageLarge: 'https://code.s3.yandex.net/react/code/bun-01.png',
    calories: 643,
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    types: 'bun',
    keyId: 'e9821a00-4616-434b-a2f7-9c6058ec15de'
  }

  it('should return the initial state', () => {
    expect(constructorReducer(undefined, {} as any))
      .toEqual(initialState)
  })

  it('should ADD_INGREDIENTS', () => {
    expect(constructorReducer(initialState, {
      // @ts-ignore
      type: ADD_INGREDIENTS,
      ...ingredient,
    }))
      .toEqual({
        ...initialState,
        ingredients: [ingredient, ...initialState.ingredients.filter((item) => item.types !== 'bun'), ingredient]
      })
  })

  it('should REMOVE_INGREDIENTS', () => {
    expect(constructorReducer(initialState, {
      type: REMOVE_INGREDIENTS,
      keyId: 'keyId',
    }))
      .toEqual({
        ...initialState,
        ingredients: initialState.ingredients.filter((item) => item.keyId !== 'keyId')
      })
  })

  it('should REMOVE_ALL_INGREDIENTS', () => {
    expect(constructorReducer(initialState, {
      type: REMOVE_ALL_INGREDIENTS,
      ingredients: [],
    }))
      .toEqual({
        ...initialState,
        ingredients: [],
      })
  })

  // it('should REPLASE_INGREDIENT', () => {
  //   expect(constructorReducer(initialState, {
  //     type: REPLASE_INGREDIENT,
  //     dragItem: 'dragItem',
  //     hoverItem: 'hoverItem',
  //   }))
  //     .toEqual({
  //       ...initialState,
  //       ingredients: [ingredient]
  //     })
  // })
})