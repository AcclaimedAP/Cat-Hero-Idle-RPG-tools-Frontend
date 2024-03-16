import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEquipment } from 'src/types/ICollection';

const initialState: IEquipment = {
	companionsList: [{}, {}, {}, {}, {}, {}],
	skillList: [{}, {}, {}, {}, {}, {}],
	mainRuneList: [{}, {}, {}],
	subRuneList: [{}, {}, {}, {}],
	additionalMp: 0,
	mpResearchLevel: 15,
};

export const equipmentInitialState = initialState;

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
