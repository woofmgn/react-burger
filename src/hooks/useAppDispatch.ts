import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../services/store';

// type DispatchFunc = () => AppDispatch | AppThunk
// export const useAppDispatch: DispatchFunc = useDispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>(); 

export const useAppDispatch = () => useDispatch<AppDispatch>(); 