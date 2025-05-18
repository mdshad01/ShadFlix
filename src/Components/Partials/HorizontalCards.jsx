import React from "react";
import { Link } from "react-router-dom";
import noimage from "/public/noimage.jpg";
const HorizontalCards = ({ data }) => {
	return (
		<div className=" w-full flex overflow-y-hidden px-3">
			{data.length > 0 ? (
				data.map((d, i) => (
					<Link
						to={`/${d.media_type}/details/${d.id}`}
						key={i}
						className="relative mr-5 h-80 min-w-[150px]  bg-zinc-900 mb-5 rounded  overflow-hidden ">
						<img
							className="h-[225px] w-[150px] object-cover "
							src={
								d.poster_path ||
								d.backdrop_path ||
								d.profile_path
									? `https://image.tmdb.org/t/p/original/${
											d.poster_path ||
											d.backdrop_path ||
											d.profile_path
									  }`
									: noimage
							}
							alt=""
						/>
						<div className=" text-white h-[90px] w-[150px] py-2 px-3 overflow-y-auto">
							<h3 className=" font-semibold pt-1 ">
								{d.title ||
									d.name ||
									d.original_title ||
									d.original_name}
							</h3>
							<p className=" text-xs">
								{d.overview.slice(0, 50)}..
								<span className="text-zinc-400 font-semibold">
									more
								</span>
							</p>
						</div>
						{d.vote_average && (
							<div className="absolute bg-black bottom-[27%] left-[5%] text-white rounded-full border-3 border-green-500 h-[5vh] w-[5vh] text-sm font-semibold flex justify-center items-center">
								{(d.vote_average * 10).toFixed()}{" "}
								<sup className="text-[7px]">%</sup>
							</div>
						)}
					</Link>
				))
			) : (
				<h1 className="text-white text-4xl font-black pb-10">
					Nothing to Show
				</h1>
			)}
		</div>
	);
};

export default HorizontalCards;
