import { AnyAction } from 'redux';
import {
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_REMOVE,
  SET_ORDER_SUCCES,
} from "../../../utils/constants";
import { initialState, orderReducer } from './orderReducer';

describe('order Reducer', () => {
  const order = {
    name: 'Space флюоресцентный бургер',
    order: {
      ingredients: [
        {
          _id: '643d69a5c3f7b9001cfa093d',
          name: 'Флюоресцентная булка R2-D3',
          type: 'bun',
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: 'https://code.s3.yandex.net/react/code/bun-01.png',
          image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0943',
          name: 'Соус фирменный Space Sauce',
          type: 'sauce',
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
          image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa093d',
          name: 'Флюоресцентная булка R2-D3',
          type: 'bun',
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: 'https://code.s3.yandex.net/react/code/bun-01.png',
          image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
          __v: 0
        }
      ],
      _id: '6442aac345c6f2001be6c598',
      owner: {
        name: 'denis',
        email: 'den11@mgnmail.ru',
        createdAt: '2023-04-17T19:00:56.014Z',
        updatedAt: '2023-04-17T19:00:56.014Z'
      },
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2023-04-21T15:24:51.941Z',
      updatedAt: '2023-04-21T15:24:51.970Z',
      number: 1068,
      price: 2056
    },
    success: true
  }

  it('should return the initial state', () => {
    expect(orderReducer(undefined, {} as AnyAction))
      .toEqual(initialState);
  })

  it('should SET_ORDER', () => {
    expect(orderReducer(initialState, {
      type: SET_ORDER,
    }))
      .toEqual({
        ...initialState,
        feedReq: true,
      })
  })

  it('should SET_ORDER_SUCCES', () => {
    expect(orderReducer(initialState, {
      type: SET_ORDER_SUCCES,
      order: order,
    }))
      .toEqual({
        ...initialState,
        feedReq: false,
        ...order,
      })
  })

  it('should SET_ORDER_FAILED', () => {
    expect(orderReducer(initialState, {
      type: SET_ORDER_FAILED,
    }))
      .toEqual({
        ...initialState,
        feedFailed: false,
      })
  })

  it('should SET_ORDER_REMOVE', () => {
    expect(orderReducer(initialState, {
      type: SET_ORDER_REMOVE,
    }))
      .toEqual({
        ...initialState
      })
  })
})