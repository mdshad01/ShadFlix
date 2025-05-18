import React, { useEffect, useState } from "react";
import Sidenav from "./Partials/Sidenav";
import Topnav from "./Partials/Topnav";
import axios from "../Utils/axios";
import Header from "./Partials/Header";
import HorizontalCards from "./Partials/HorizontalCards";
import Dropdown from "./Partials/Dropdown";
import Loading from "./Loading";
const Home = () => {
	document.title = "ShadFlix - Homepage";
	const [wallpaper, setwallpaper] = useState(null);
	const [trending, setTrending] = useState(null);
	const [category, setcategory] = useState("all");

	const GetHeaderWallpaper = async () => {
		try {
			const { data } = await axios.get(`/trending/all/week`);
			const randomdata =
				data.results[(Math.random() * data.results.length).toFixed()];
			// console.log(data);
			setwallpaper(randomdata);
		} catch (error) {
			console.log("Error : ", error);
		}
	};
	const GetTrending = async () => {
		try {
			const { data } = await axios.get(`/trending/${category}/week`);

			setTrending(data.results);
		} catch (error) {
			console.log("Error : ", error);
		}
	};

	useEffect(() => {
		GetTrending();
		!wallpaper && GetHeaderWallpaper();
	}, [category]);
	// console.log(trending);
	return wallpaper && trending ? (
		<>
			<Sidenav />
			<div className="w-[80%] overflow-auto overflow-x-hidden">
				<Topnav />
				<Header data={wallpaper} />
				<div className="p-5 flex justify-between">
					<h1 className="text-2xl text-zinc-200 font-semibold ">
						Trending
					</h1>
					<Dropdown
						title="Fliter"
						options={["tv", "movie", "all"]}
						func={(e) => setcategory(e.target.value)}
					/>
				</div>
				<HorizontalCards
					data={trending}
					category={setcategory}
				/>
			</div>
			;
		</>
	) : (
		// <h1 className="w-full h-[100vh] text-center m-auto  text-zinc-100 text-3xl font-bold">
		// 	Loding...
		// </h1>
		<Loading />
	);
};

export default Home;
