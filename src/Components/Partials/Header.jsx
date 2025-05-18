import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3), rgba(0,0,0,0.6)) , url(https://image.tmdb.org/t/p/original/${
					data.backdrop_path || data.poster_path || data.profile_path
				})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="w-full h-[55vh] flex flex-col justify-end items-start py-12 px-15 text-white">
			<h1 className="text-5xl  font-black mb-2">
				{data.title ||
					data.name ||
					data.original_title ||
					data.original_name}
			</h1>
			<p className=" text-white">
				{data.overview.slice(0, 200)}..
				<Link
					to={`/${data.media_type}/details/${data.id}`}
					className="text-blue-400 font-semibold">
					more
				</Link>
			</p>
			<p className="text-white">
				<i className="text-yellow-500 ri-megaphone-fill "></i>{" "}
				{data.release_date || data.first_air_date || "No Information"}
				<i className="text-yellow-500 ml-2 ri-movie-2-fill"></i>{" "}
				{data.media_type.toUpperCase()}
			</p>
			<Link
				to={`/${data.media_type}/details/${data.id}/trailer`}
				className="bg-[#6556cd] p-2 px-4 rounded mt-3 text-sm font-semibold ">
				Watch Trailer
			</Link>
		</div>
	);
};

export default Header;
