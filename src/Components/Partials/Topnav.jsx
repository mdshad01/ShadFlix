import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/axios";
import noimage from "/public/noimage.jpg";
const Topnav = () => {
	const [query, setquery] = useState("");
	const [searches, setsearches] = useState([]);
	const GetSearch = async () => {
		try {
			const { data } = await axios.get(`/search/multi?query=${query}`);
			console.log(data);
			setsearches(data.results);
		} catch (error) {
			console.log("Error : ", error);
		}
	};

	// useEffect(() => {
	// 	if (!query) {
	// 		setsearches([]);
	// 		return;
	// 	}

	// 	GetSearch();
	// }, [query]);

	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			if (query.trim() !== "") {
				GetSearch();
			} else {
				setsearches([]);
			}
		}, 500); // 500ms debounce

		return () => clearTimeout(delayDebounce);
	}, [query]);

	return (
		<div className="h-[10vh] w-full relative flex justify-center items-center">
			<div className="relative  w-1/2">
				<i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-300 text-2xl"></i>
				<input
					onChange={(e) => setquery(e.target.value)}
					value={query}
					className="w-[88%] outline-none border-2 border-zinc-600 pl-12 pr-4 py-2 rounded-full bg-transparent text-zinc-200"
					type="text"
					placeholder="Search..."
				/>
				{query.length > 0 && (
					<i
						onClick={() => setquery("")}
						className="ri-close-fill text-zinc-300 absolute top-1/2 transform -translate-y-1/2 right-20 text-2xl"></i>
				)}
			</div>

			<div className="z-10 absolute w-[44%] max-h-[55vh] bg-zinc-300 top-[100%] left-[25%] overflow-auto text-zinc-900 rounded">
				{searches.map((s, i) => (
					<Link
						to={`/${s.media_type}/details/${s.id}`}
						key={i}
						className="w-full hover:bg-[#6556cd] hover:text-zinc-100 duration-300 flex items-center py-3 gap-8 border-b-2 border-zinc-900 px-5">
						<img
							className="w-[12vh] h-[15vh] object-cover"
							src={
								s.backdrop_path || s.profile_path
									? `https://image.tmdb.org/t/p/original/${
											s.backdrop_path || s.profile_path
									  }`
									: noimage
							}
							alt=""
						/>
						<span className="font-semibold">
							{s.name || s.original_title || s.original_name}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Topnav;
