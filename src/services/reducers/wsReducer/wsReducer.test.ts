import { AnyAction } from 'redux';
import { initialState, wsActionsOptions, wsReducer } from './wsReducer';

describe('WebSocket Reducer', () => {
  const message = {
    wsConnection: true,
    success: true,
    total: 5,
    totalToday: 10,
    orders: [
      {
        _id: '6442d3f045c6f2001be6c6cd',
        ingredients: [
          '643d69a5c3f7b9001cfa093d',
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa0942',
          '643d69a5c3f7b9001cfa093d'
        ],
        status: 'done',
        name: 'Space флюоресцентный spicy бургер',
        createdAt: '2023-04-21T18:20:32.381Z',
        updatedAt: '2023-04-21T18:20:32.474Z',
        number: 1118
      },
    ]
  }

  it('should return the initial state', () => {
    expect(wsReducer(undefined, {} as AnyAction))
      .toEqual(initialState)
  })

  it('should WS_CONNECTION_START', () => {
    expect(wsReducer(initialState, {
      type: wsActionsOptions.wsInit,
      payload: wsActionsOptions.wsInit,
    }))
      .toEqual(initialState)
  })

  it('should WS_CONNECTION_SUCCESS', () => {
    expect(wsReducer(initialState, {
      type: wsActionsOptions.wsSuccess,
    }))
      .toEqual({
        ...initialState,
        wsConnection: true,
        error: undefined
      })
  })

  it('should WS_CONNECTION_ERROR', () => {
    expect(wsReducer(initialState, {
      type: wsActionsOptions.wsError,
      // @ts-ignore
      payload: 'ошибка'
    }))
      .toEqual({
        ...initialState,
        wsConnection: false,
        error: 'ошибка'
      })
  })

  it('should WS_CONNECTION_CLOSED', () => {
    expect(wsReducer(initialState, {
      type: wsActionsOptions.wsClose,
    }))
      .toEqual({
        ...initialState,
        error: undefined
      })
  })

  it('should WS_GET_MESSAGE', () => {
    expect(wsReducer(initialState, {
      type: wsActionsOptions.wsGetMessage,
      payload: message
    }))
      .toEqual({
        ...initialState,
        total: message.total,
        totalToday: message.totalToday,
        orders: message.orders,
        success: true,
        error: undefined
      })
  })
})