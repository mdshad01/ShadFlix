export { removetv } from "../reducers/tvSlice";
import axios from "../../Utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncLoadtv = (id) => async (dispatch, getState) => {
	try {
		const detail = await axios.get(`/tv/${id}`);
		const externalid = await axios.get(`/tv/${id}/external_ids`);
		const recommendations = await axios.get(`/tv/${id}/recommendations`);
		const similar = await axios.get(`/tv/${id}/similar`);
		const translations = await axios.get(`/tv/${id}/translations`);
		const videos = await axios.get(`/tv/${id}/videos`);
		const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
		const credits = await axios.get(`/tv/${id}/credits`);

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
		dispatch(loadtv(totalData));
		// console.log(totalData);
	} catch (error) {
		console.log("Error : ", error);
	}
};
