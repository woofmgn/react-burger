import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../services/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector