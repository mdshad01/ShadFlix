export { removemovie } from "../reducers/movieSlice";
import axios from "../../Utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
	try {
		const detail = await axios.get(`/movie/${id}`);
		const externalid = await axios.get(`/movie/${id}/external_ids`);
		const recommendations = await axios.get(`/movie/${id}/recommendations`);
		const similar = await axios.get(`/movie/${id}/similar`);
		const translations = await axios.get(`/movie/${id}/translations`);
		const videos = await axios.get(`/movie/${id}/videos`);
		const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
		const credits = await axios.get(`/movie/${id}/credits`);

		let totalData = {
			detail: detail.data,
			externalid: externalid.data,
			recommendations: recommendations.data.results,
			similar: similar.data.results,
			translations: translations.data.translations.map(
				(t) => t.english_name
			),
			videos: videos.data.results.find((m) => m.type === "Trailer"),
			watchProviders: watchProviders.data.results.IN,
			credits: credits.data.cast,
		};
		dispatch(loadmovie(totalData));
		// console.log(totalData);
	} catch (error) {
		console.log("Error : ", error);
	}
};
