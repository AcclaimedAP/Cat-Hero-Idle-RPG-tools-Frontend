import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Game from 'src/types/game';

/**
 * The initial state of the collection display
 * @const initialState
 * @type {Game.Collection.Full}
 * @description The initial state of the collection display
 * 
 */
const initialState: Game.Collection.Full = {
	companionsList: [],
	skillList: [],
	mainRuneList: [],
	subRuneList: [],
};

/**
 * The collection display slice for redux
 * @const collectionInitialState
 * @type {Game.Collection.Full}
 * @description The collection initial state, which is exported to be used in the project as a reference for the initial state.
 * 
 */
export const collectionInitialState = initialState;


/**
 * The collection display slice for redux
 * @const collectionDisplaySlice
 * @type {any}
 * @description The collection display slice for redux, which contains the reducers and the current state of the slice.
 * 
 * @example
 * // You can access the state of the collection display slice by using the useSelector hook from react-redux
 * const collectionDisplay = useSelector((state: RootState) => state.collectionDisplay);
 * 
 * // You can dispatch the actions of the collection display slice by using the useDispatch hook from react-redux in various ways.
 * const dispatch = useDispatch(); // Declare the dispatch hook
 * dispatch(setCollection({companionsList: [], skillList: [], mainRuneList: [], subRuneList: []})); // Dispatch to update the whole state
 * dispatch(setCompanionsList([])); // Dispatch to update the companions list
 * dispatch(setSkillList([])); // Dispatch to update the skill list
 * dispatch(setMainRuneList([])); // Dispatch to update the main rune list
 * dispatch(setSubRuneList([])); // Dispatch to update the sub rune list
 * dispatch(resetCollection()); // Dispatch to reset the collection state
 * 
 */
export const collectionDisplaySlice = createSlice({
	name: 'collectionDisplay',
	initialState,
	reducers: {
		setCollection: (state, action: PayloadAction<Game.Collection.Full>) => {
			state.companionsList = action.payload.companionsList;
			state.skillList = action.payload.skillList;
			state.mainRuneList = action.payload.mainRuneList;
			state.subRuneList = action.payload.subRuneList;
		},
		setCompanionsList: (state, action: PayloadAction<Game.Collection.Full['companionsList']>) => {
			state.companionsList = action.payload;
		},
		setSkillList: (state, action: PayloadAction<Game.Collection.Full['skillList']>) => {
			state.skillList = action.payload;
		},
		setMainRuneList: (state, action: PayloadAction<Game.Collection.Full['mainRuneList']>) => {
			state.mainRuneList = action.payload;
		},
		setSubRuneList: (state, action: PayloadAction<Game.Collection.Full['subRuneList']>) => {
			state.subRuneList = action.payload;
    },
    resetCollection: (state) => {
      state.companionsList = initialState.companionsList;
      state.skillList = initialState.skillList;
      state.mainRuneList = initialState.mainRuneList;
      state.subRuneList = initialState.subRuneList;
    }
	},
});

export const { setCollection, setCompanionsList, setSkillList, setMainRuneList, setSubRuneList, resetCollection } = collectionDisplaySlice.actions;
export default collectionDisplaySlice.reducer;
