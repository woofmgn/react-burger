import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../services/store';

export const useAppDispatch = () => useDispatch<AppDispatch>(); 