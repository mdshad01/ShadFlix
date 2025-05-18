import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const category = pathname.includes("movie") ? "movie" : "tv";
	const video = useSelector((state) => state[category].info.videos);
	// console.log(pathname, video);
	return (
		<div className="z-100 bg-[rgba(0,0,0,0.9)] absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
			<Link
				onClick={() => navigate(-1)}
				className="hover:text-[#8573ff]  ri-close-fill text-3xl text-white absolute top-[5%] right-[5%]"></Link>
			{video ? (
				<ReactPlayer
					controls
					height={620}
					width={1120}
					url={`https://www.youtube.com/watch?v=${video.key}`}
				/>
			) : (
				<NotFound />
			)}
		</div>
	);
};

export default Trailer;
