import React, { useEffect, useState } from "react";
import Topnav from "./Partials/Topnav";
import Dropdown from "./Partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidenav from "./Partials/Sidenav";
const Trending = () => {
	const navigate = useNavigate();
	const [category, setcategory] = useState("movie");
	const [duration, setduration] = useState("day");
	const [trending, setTrending] = useState([]);
	const [page, setpage] = useState(1);
	const [hasmore, sethasmore] = useState(true);

	document.title = `ShadFlix - Trending + ${category.toUpperCase()}`;
	const GetTrending = async () => {
		try {
			const { data } = await axios.get(
				`/trending/${category}/${duration}?page=${page}` //important!  syntax to request multiple pages
			);

			if (data.results.length > 0) {
				setTrending((prevState) => [...prevState, ...data.results]);
				// setpage(page + 1);
				sethasmore(true);
			} else {
				sethasmore(false);
			}
			// setTrending(data.results);
			console.log(data);
		} catch (error) {
			console.log("Error : ", error);
		}
	};
	useEffect(() => {
		setTrending([]);
		setpage(1);
		sethasmore(true);
	}, [category, duration]);

	useEffect(() => {
		GetTrending();
	}, [page, category, duration]);

	// const refersHandler = async () => {
	// 	if (trending.length === 0) {
	// 		setpage(1);
	// 		GetTrending();
	// 	} else {
	// 		setTrending([]);
	// 		GetTrending();
	// 		setpage((prevPage) => prevPage + 1);
	// 	}
	// };

	// useEffect(() => {
	// 	refersHandler();
	// }, [category, duration]);
	// console.log(trending);
	return trending.length > 0 ? (
		<div className=" w-screen h-screen bg-[#1f1e24] ">
			<div className="px-[2%] w-full flex items-center justify-between">
				<h1 className="text-zinc-200  text-2xl font-semibold">
					<i
						onClick={() => navigate(-1)}
						className="hover:text-[#8573ff] mr-2 ri-arrow-left-line"></i>
					Trending
				</h1>
				<div className="flex w-[95%] items-center">
					<Topnav />
					<Dropdown
						title="Category"
						options={["tv", "movie"]}
						func={(e) => setcategory(e.target.value)}
					/>
					<div className="w-[2%]"></div>
					<Dropdown
						title="Duration"
						options={["week", "day"]}
						func={(e) => setduration(e.target.value)}
					/>
				</div>
			</div>
			<InfiniteScroll
				dataLength={trending.length}
				next={() => setpage((prev) => prev + 1)}
				// next={() => sethasmore(true)}
				hasMore={hasmore}
				loader={
					<h1 className="text-zinc-300 bg-[#1F1E24]">Loading...</h1>
				}>
				<Cards
					data={trending}
					title={category}
				/>
			</InfiniteScroll>
		</div>
	) : (
		<Loading />
	);
};

export default Trending;
