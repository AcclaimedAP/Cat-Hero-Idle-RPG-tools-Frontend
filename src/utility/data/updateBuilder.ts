export const updateBuilder = () => {
	// Get version from localstorage

	let version = localStorage.getItem('version');

	if (!version) {
		localStorage.setItem('version', '1.0.0');
		version = '1.0.0';
	}
	update(version);
};

const update = (version: string) => {
	switch (version) {
		case '1.0.0':
			// Update to version 1.0.1
			updateLocalStorageTo101();
			localStorage.setItem('version', '1.0.1');
			//updateToVersion('1.0.1');
			break;
		default:
			break;
	}
};

const updateLocalStorageTo101 = () => {
	// get equipment localstorage
	const equipment = localStorage.getItem('equipment');
	// add 1 empty object to "MainRuneList" array
	if (!equipment) return;
	const updatedEquipment = JSON.parse(equipment);
	updatedEquipment.mainRuneList.push({});
	// add 2 empty object to "SubRuneList" array
	updatedEquipment.subRuneList.push({});
	updatedEquipment.subRuneList.push({});

	localStorage.setItem('equipment', JSON.stringify(updatedEquipment));
};

export const updateBuild = (equipment: any) => {
	return updateBuildTo101(equipment);
};

const updateBuildTo101 = (equipment: any) => {
	// add 1 empty object to "MainRuneList" array
	if (!equipment) return;
	if (equipment.mainRuneList.length < 4) {
		equipment.mainRuneList.push({});
	}
	// add 2 empty object to "SubRuneList" array
	if (equipment.subRuneList.length < 6) {
		equipment.subRuneList.push({});
		equipment.subRuneList.push({});
	}
	return equipment;
};
