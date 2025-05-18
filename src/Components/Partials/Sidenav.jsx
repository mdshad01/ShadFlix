import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
	return (
		<div className="w-[20%] h-screen border-r-2 border-zinc-400 py-5 px-6 ">
			<h1 className="text-2xl font-bold text-white">
				<i className="text-[#6556cd]  ri-tv-fill"></i>
				<span className="  ml-2 font-bold">ShadFlix</span>
			</h1>
			<nav className="text-zinc-300 flex flex-col text-lg gap-2">
				<h1 className="text-xl text-white font-semibold mt-5">
					New Feeds
				</h1>
				<Link
					to="/trending"
					className="hover:bg-[#6556cd] hover:text-white  duration-250 p-3  rounded-lg">
					<i className="ri-fire-fill mr-1"></i>Trending
				</Link>
				<Link
					to="/popular"
					className="hover:bg-[#6556cd] hover:text-white  duration-250  p-3  rounded-lg">
					<i className="ri-bard-fill mr-2"></i>Popular
				</Link>
				<Link
					to="/movie"
					className="hover:bg-[#6556cd] hover:text-white  duration-250  p-3  rounded-lg">
					<i className="mr-2 ri-movie-2-fill"></i>Movies
				</Link>
				<Link
					to="/tv"
					className="hover:bg-[#6556cd]  hover:text-white  duration-250  p-3  rounded-lg">
					<i className="mr-2 ri-tv-2-fill"></i>TV Show
				</Link>
				<Link
					to="/person"
					className="hover:bg-[#6556cd]  hover:text-white  duration-250  p-3  rounded-lg">
					<i className="mr-2 ri-team-fill"></i>Person
				</Link>
			</nav>
			<hr className="text-zinc-400  h-[1px] mt-4" />
			<nav className="text-zinc-300 flex flex-col text-lg gap-2">
				<h1 className="text-xl text-white font-semibold mt-5">
					Website Information
				</h1>
				<Link
					to="/about"
					className="hover:bg-[#6556cd] hover:text-white  duration-250 p-3  rounded-lg">
					<i className="mr-2 ri-information-2-fill"></i>About ShadFlix
				</Link>
				<Link
					to="/contact"
					className="hover:bg-[#6556cd] hover:text-white  duration-250  p-3  rounded-lg">
					<i className="mr-2 ri-phone-fill"></i>Contact US
				</Link>
			</nav>
		</div>
	);
};

export default Sidenav;
