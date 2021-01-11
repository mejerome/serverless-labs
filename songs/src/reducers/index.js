import { combineReducers } from "redux";
const songsReducer = () => {
	return [
		{ title: "Akobam", duration: "3:40" },
		{ title: "Open gate", duration: "2:58" },
		{ title: "Otan hunu", duration: "4:12" },
		{ title: "Ataa adwoa", duration: "3:22" },
	];
};

const selectedSongReducer = (selectedSong = [], action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
