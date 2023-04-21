import { AnyAction } from 'redux';
import { ADD_USER, ADD_USER_FAILED, ADD_USER_SUCCES, AUTH_CHECKED, GET_USER, GET_USER_FAILED, GET_USER_SUCCESS, REMOVE_USER, SET_USER, SET_USER_FAILED, SET_USER_SUCCESS } from '../../../utils/constants';
import { initialState, userReducer } from './userReducer';

describe('userReducer', () => {
  const user = {
    email: 'den11@mgnmail.ru',
    name: 'denis'
  }

  it('should return the initial state', () => {
    expect(userReducer(undefined, {} as AnyAction))
      .toEqual(initialState)
  })

  it('should ADD_USER', () => {
    expect(userReducer(initialState, {
      type: ADD_USER,
    }))
      .toEqual({
        ...initialState,
        feedRequest: true,
      })
  })

  it('should ADD_USER_SUCCES', () => {
    expect(userReducer(initialState, {
      type: ADD_USER_SUCCES,
      user: user
    }))
      .toEqual({
        ...initialState,
        logged: true,
        user: user
      })
  })

  it('should ADD_USER_FAILED', () => {
    expect(userReducer(initialState, {
      type: ADD_USER_FAILED,
    }))
      .toEqual({
        ...initialState,
        feedFailed: true
      })
  })

  it('should AUTH_CHECKED', () => {
    expect(userReducer(initialState, {
      type: AUTH_CHECKED,
    }))
      .toEqual(initialState)
  })

  it('should REMOVE_USER', () => {
    expect(userReducer(initialState, {
      type: REMOVE_USER
    }))
      .toEqual(initialState)
  })

  it('should GET_USER', () => {
    expect(userReducer(initialState, {
      type: GET_USER,
    }))
      .toEqual({
        ...initialState,
        feedRequest: true,
      })
  })

  it('should GET_USER_SUCCESS', () => {
    expect(userReducer(initialState, {
      type: GET_USER_SUCCESS,
      user: user
    }))
      .toEqual({
        ...initialState,
        user: user,
        logged: true
      })
  })

  it('should GET_USER_FAILED', () => {
    expect(userReducer(initialState, {
      type: GET_USER_FAILED,
    }))
      .toEqual({
        ...initialState,
        feedFailed: true
      })
  })

  it('should SET_USER', () => {
    expect(userReducer(initialState, {
      type: SET_USER
    }))
      .toEqual({
        ...initialState,
        feedRequest: true,
      })
  })

  it('should SET_USER_SUCCESS', () => {
    expect(userReducer(initialState, {
      type: SET_USER_SUCCESS,
      user: user,
    }))
      .toEqual({
        ...initialState,
        user: user
      })
  })

  it('should SET_USER_FAILED', () => {
    expect(userReducer(initialState, {
      type: SET_USER_FAILED,
    }))
      .toEqual({
        ...initialState,
        feedFailed: true,
      })
  })
})