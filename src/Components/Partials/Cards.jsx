import React from "react";
import { Link } from "react-router-dom";
import noimage from "/public/noimage.jpg";
const Cards = ({ data, title }) => {
	// console.log(title);
	return (
		<div className="w-full flex flex-wrap pl-[1%] bg-[#1f1e24]">
			{data.map((c, i) => (
				<Link
					to={`/${data.media_type || title}/details/${c.id}`}
					key={i}
					className="relative w-[11.25rem] h-88 bg-zinc-900 mr-5 mb-5 rounded overflow-hidden">
					<img
						className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[11.25rem] h-[17.06rem] rounded"
						src={
							c.poster_path || c.backdrop_path || c.profile_path
								? `https://image.tmdb.org/t/p/original/${
										c.poster_path ||
										c.backdrop_path ||
										c.profile_path
								  }`
								: noimage
						}
						alt=""
					/>
					<div className="pl-2 ">
						<h1 className="text-zinc-100 font-semibold text-lg mt-6   overflow-hidden">
							{c.title ||
								c.name ||
								c.original_title ||
								c.original_name}
						</h1>
						<p className="text-zinc-400 text-sm  ">
							{c.first_air_date || c.release_date}
						</p>
					</div>
					{c.vote_average && (
						<div className="absolute bg-black bottom-[17%] left-[3%] text-white rounded-full border-3 border-green-500 h-[6vh] w-[6vh] text-lg font-semibold flex justify-center items-center">
							{(c.vote_average * 10).toFixed()}{" "}
							<sup className="text-[8px]">%</sup>
						</div>
					)}
				</Link>
			))}
		</div>
	);
};

export default Cards;
