import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEquipment } from 'src/types/ICollection';

/**
 * The initial state of the equipment display
 * @const initialState
 * @type {IEquipment}
 * @description The initial state of the equipment display
 *
 */
const initialState: IEquipment = {
	companionsList: [{}, {}, {}, {}, {}, {}],
	skillList: [{}, {}, {}, {}, {}, {}],
	mainRuneList: [{}, {}, {}, {}],
	subRuneList: [{}, {}, {}, {}, {}, {}],
	additionalMp: 0,
	mpResearchLevel: 15,
};

/**
 * The equipment display slice for redux
 * @const equipmentInitialState
 * @type {IEquipment}
 * @description The equipment initial state, which is exported to be used in the project as a reference for the initial state.
 *
 */
export const equipmentInitialState = initialState;

/**
 * The equipment display slice for redux
 * @const equipmentDisplaySlice
 * @type {any}
 * @description The equipment display slice for redux, which contains the reducers and the current state of the slice.
 *
 * @example
 * // You can access the state of the equipment display slice by using the useSelector hook from react-redux
 * const equipmentDisplay = useSelector((state: RootState) => state.equipmentDisplay);
 *
 * // You can dispatch the actions of the equipment display slice by using the useDispatch hook from react-redux in various ways.
 * const dispatch = useDispatch(); // Declare the dispatch hook
 * dispatch(setEquipment({companionsList: [], skillList: [], mainRuneList: [], subRuneList: [], additionalMp: 0, mpResearchLevel: 0})); // Dispatch to update the whole state
 * dispatch(setCompanionsList([])); // Dispatch to update the companions list
 * dispatch(setSkillList([])); // Dispatch to update the skill list
 * dispatch(setMainRuneList([])); // Dispatch to update the main rune list
 * dispatch(setSubRuneList([])); // Dispatch to update the sub rune list
 * dispatch(setAdditionalMp(0)); // Dispatch to update the additional mp
 * dispatch(setMpResearchLevel(0)); // Dispatch to update the mp research level
 * dispatch(resetEquipment()); // Dispatch to reset the equipment state
 *
 */

export const equipmentDisplaySlice = createSlice({
	name: 'equipmentDisplay',
	initialState,
	reducers: {
		setEquipment: (state, action: PayloadAction<IEquipment>) => {
			state.companionsList = action.payload.companionsList;
			state.skillList = action.payload.skillList;
			state.mainRuneList = action.payload.mainRuneList;
			state.subRuneList = action.payload.subRuneList;
			state.mpResearchLevel = action.payload.mpResearchLevel;
			state.additionalMp = action.payload.additionalMp;
		},
		setCompanionsList: (state, action: PayloadAction<IEquipment['companionsList']>) => {
			state.companionsList = action.payload;
		},
		setSkillList: (state, action: PayloadAction<IEquipment['skillList']>) => {
			state.skillList = action.payload;
		},
		setMainRuneList: (state, action: PayloadAction<IEquipment['mainRuneList']>) => {
			state.mainRuneList = action.payload;
		},
		setSubRuneList: (state, action: PayloadAction<IEquipment['subRuneList']>) => {
			state.subRuneList = action.payload;
		},
		setMpResearchLevel: (state, action: PayloadAction<number>) => {
			state.mpResearchLevel = action.payload;
		},
		setAdditionalMp: (state, action: PayloadAction<number>) => {
			state.additionalMp = action.payload;
		},
		resetEquipment: (state) => {
			state.companionsList = initialState.companionsList;
			state.skillList = initialState.skillList;
			state.mainRuneList = initialState.mainRuneList;
			state.subRuneList = initialState.subRuneList;
			state.additionalMp = initialState.additionalMp;
		},
	},
});

export const { setEquipment, setCompanionsList, setSkillList, setMainRuneList, setSubRuneList, setAdditionalMp, setMpResearchLevel, resetEquipment } = equipmentDisplaySlice.actions;
export default equipmentDisplaySlice.reducer;
