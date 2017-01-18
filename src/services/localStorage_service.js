// Service methods for saving and retriving data from local storage

export const loadStateFromStorage = () => {
	try{
		const serializedState = localStorage.getItem('state');
		if(serializedState === null){
			return [];
		}

		return JSON.parse(serializedState);
	} catch(err){
		return undefined;
	}

};

export const saveStateToStorage = (video) => {
	try{
		var videos = loadStateFromStorage();
		const newVideos = [...videos,video];
		const serializedState = JSON.stringify(newVideos);
		localStorage.setItem('state',serializedState);
	}
	catch(err){
		//Ignore write errors.
	}
};