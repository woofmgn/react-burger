import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../services/store';

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
