import axios from "../Utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./Partials/Topnav";
import Dropdown from "./Partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Partials/Cards";

const Popular = () => {
	const navigate = useNavigate();
	const [category, setcategory] = useState("movie");
	const [popular, setpopular] = useState([]);
	const [page, setpage] = useState(1);
	const [hasmore, sethasmore] = useState(true);
	document.title = `ShadFlix - Popular + ${category.toUpperCase()}`;
	const GetPopular = async () => {
		try {
			const { data } = await axios.get(
				`/${category}/popular?page=${page}` //important!  syntax to request multiple pages
			);

			if (data.results.length > 0) {
				setpopular((prevState) => [...prevState, ...data.results]);
				// setpage(page + 1);
			} else {
				sethasmore(false);
			}
			// setpopular(data.results);
			// console.log(data);
		} catch (error) {
			console.log("Error : ", error);
		}
	};

	useEffect(() => {
		setpopular([]);
		setpage(1);
		sethasmore(true);
	}, [category]);

	useEffect(() => {
		GetPopular();
	}, [page, category]);
	return popular.length > 0 ? (
		<div className=" w-screen h-screen bg-[#1f1e24] ">
			<div className="px-[2%] w-full flex items-center justify-between">
				<h1 className="text-zinc-200  text-2xl font-semibold">
					<i
						onClick={() => navigate(-1)}
						className="hover:text-[#8573ff] mr-2 ri-arrow-left-line"></i>
					Popular
				</h1>
				<div className="flex w-[95%] items-center">
					<Topnav />
					<Dropdown
						title="Category"
						options={["movie", "tv"]}
						func={(e) => setcategory(e.target.value)}
					/>
					{/* <div className="w-[2%]"></div> */}
				</div>
			</div>
			<InfiniteScroll
				dataLength={popular.length}
				next={() => setpage((prev) => prev + 1)}
				hasMore={hasmore}
				loader={<h1>Loading...</h1>}>
				<Cards
					data={popular}
					title={category}
				/>
			</InfiniteScroll>
		</div>
	) : (
		<Loading />
	);
};

export default Popular;
