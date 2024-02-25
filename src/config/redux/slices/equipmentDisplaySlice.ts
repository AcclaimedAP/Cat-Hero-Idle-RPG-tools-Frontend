import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from 'src/types/ICollection';

const initialState: ICollection = {
	companionsList: [{}, {}, {}, {}, {}, {}],
	skillList: [{}, {}, {}, {}, {}, {}],
	mainRuneList: [{}, {}, {}],
	subRuneList: [{}, {}, {}, {}],
	mp: 0,
	maxMp: 30,
};

export const equipmentInitialState = initialState;

export const equipmentDisplaySlice = createSlice({
	name: 'equipmentDisplay',
	initialState,
	reducers: {
		setEquipment: (state, action: PayloadAction<ICollection>) => {
			state.companionsList = action.payload.companionsList;
			state.skillList = action.payload.skillList;
			state.mainRuneList = action.payload.mainRuneList;
			state.subRuneList = action.payload.subRuneList;
			state.mp = action.payload.mp;
			state.maxMp = action.payload.maxMp;
		},
		setCompanionsList: (state, action: PayloadAction<ICollection['companionsList']>) => {
			state.companionsList = action.payload;
		},
		setSkillList: (state, action: PayloadAction<ICollection['skillList']>) => {
			state.skillList = action.payload;
		},
		setMainRuneList: (state, action: PayloadAction<ICollection['mainRuneList']>) => {
			state.mainRuneList = action.payload;
		},
		setSubRuneList: (state, action: PayloadAction<ICollection['subRuneList']>) => {
			state.subRuneList = action.payload;
		},
		setMp: (state, action: PayloadAction<number>) => {
			state.mp = action.payload;
		},
		setMaxMp: (state, action: PayloadAction<number>) => {
			state.maxMp = action.payload;
		},
		resetEquipment: (state) => {
			state.companionsList = initialState.companionsList;
			state.skillList = initialState.skillList;
			state.mainRuneList = initialState.mainRuneList;
			state.subRuneList = initialState.subRuneList;
			state.mp = initialState.mp;
			state.maxMp = initialState.maxMp;
		},
	},
});

export const { setEquipment, setCompanionsList, setSkillList, setMainRuneList, setSubRuneList, setMp, setMaxMp, resetEquipment } = equipmentDisplaySlice.actions;
export default equipmentDisplaySlice.reducer;
