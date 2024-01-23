import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from 'src/types/ICollection';

const initialState: ICollection = {
	companionsList: [],
	skillList: [],
	mainRuneList: [],
	subRuneList: [],
};

export const collectionDisplaySlice = createSlice({
	name: 'collectionDisplay',
	initialState,
	reducers: {
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

export const { setCompanionsList, setSkillList, setMainRuneList, setSubRuneList } = collectionDisplaySlice.actions;
export default collectionDisplaySlice.reducer;
