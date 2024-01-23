import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from 'src/types/ICollection';

const initialState: ICollection = {
	companionsList: [{}, {}, {}, {}, {}, {}],
	skillList: [{}, {}, {}, {}, {}, {}],
	mainRuneList: [{}, {}, {}],
	subRuneList: [{}, {}, {}, {}],
};

export const equipmentDisplaySlice = createSlice({
	name: 'equipmentDisplay',
	initialState,
	reducers: {
		setEquipment: (state, action: PayloadAction<ICollection>) => {
			state.companionsList = action.payload.companionsList;
			state.skillList = action.payload.skillList;
			state.mainRuneList = action.payload.mainRuneList;
			state.subRuneList = action.payload.subRuneList;
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
	},
});

export const { setEquipment, setCompanionsList, setSkillList, setMainRuneList, setSubRuneList } = equipmentDisplaySlice.actions;
export default equipmentDisplaySlice.reducer;
