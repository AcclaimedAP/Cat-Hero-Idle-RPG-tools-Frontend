import { configureStore } from '@reduxjs/toolkit';
import collectionDisplayReducer from 'src/config/redux/slices/collectionDisplaySlice';
import equipmentDisplayReducer from 'src/config/redux/slices/equipmentDisplaySlice';

/**
 * The redux store for the application
 * @const store
 * @type {object}
 * @description The redux store for the application
 * @example
 * const store = configureStore({
 * reducer: {
 *  collectionDisplay: collectionDisplayReducer,
 *  equipmentDisplay: equipmentDisplayReducer,
 * }
 * });
 * 
 */
export const store = configureStore({
	reducer: {
		collectionDisplay: collectionDisplayReducer,
		equipmentDisplay: equipmentDisplayReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
