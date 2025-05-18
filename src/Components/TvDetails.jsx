import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { asyncLoadtv, removetv } from "../store/actions/tvActions";
import HorizontalCards from "./Partials/HorizontalCards";
import Loading from "./Loading";
const TvDetails = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { info } = useSelector((state) => state.tv);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(asyncLoadtv(id));
		return () => {
			dispatch(removetv());
		};
	}, [id]);
	// console.log(info);
	return info ? (
		<div
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4), rgba(0,0,0,0.6)) , url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="w-screen h-[195vh] px-[10%]">
			{/* Part 1 navigation */}

			<nav className="h-[10vh] w-full text-zinc-50 flex items-center gap-10  text-lg">
				<Link
					onClick={() => navigate(-1)}
					className="hover:text-[#8573ff] mr-2 ri-arrow-left-line"></Link>
				<a href={info.detail.homepage}>
					<i className="ri-external-link-fill"></i>
				</a>
				<a
					href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
					<i className="ri-global-line"></i>
				</a>
				<a
					href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
					IMDb
				</a>
			</nav>

			{/* Part 2 poster and details */}
			<div className="w-full flex">
				<img
					className="h-[400px] w-[260px] object-cover rounded-md"
					src={`https://image.tmdb.org/t/p/original/${
						info.detail.poster_path ||
						info.detail.backdrop_path ||
						info.detail.profile_path
					}`}
					alt=""
				/>

				<div className="content ml-12 text-white">
					<h1 className=" font-black text-5xl  ">
						{info.detail.title ||
							info.detail.name ||
							info.detail.original_title ||
							info.detail.original_name}
						<span className="text-3xl font-bold ">
							( {info.detail.first_air_date.split("-")[0]})
						</span>
					</h1>
					<div className="flex items-center mb-5 gap-5 font-semibold  mt-2">
						<span className=" bg-black   rounded-full border-4 border-green-500 h-[9vh] w-[9vh] text-2xl font-bold flex justify-center items-center">
							{(info.detail.vote_average * 10).toFixed()}{" "}
							<sup className="text-[8px]">%</sup>
						</span>
						<h2 className="w-[50px] leading-5 text-lg font-bold">
							User Score
						</h2>
						<h3>{info.detail.first_air_date}</h3>
						<h4>
							{info.detail.genres.map((g) => g.name).join(", ")}
						</h4>
						<h4>{info.detail.runtime} min</h4>
					</div>
					<h1 className=" text-2xl font-semibold italic  text-zinc-200">
						{info.detail.tagline}
					</h1>
					<h1 className="text-2xl font-semibold my-2 text-white">
						Overview
					</h1>
					<p className="mb-8">{info.detail.overview}</p>

					{/* <h1 className="text-2xl font-semibold my-2 text-white">
						tv Translated
					</h1>
					<p>{info.translations.join(", ")}</p> */}
					<Link
						className="pl-4 pr-7 py-3 bg-[#6556cd]  rounded-md"
						to={`${pathname}/trailer`}>
						<i className="text-lg mr-1 ri-play-fill"></i>
						Play Trailer
					</Link>
				</div>
			</div>

			{/* Part 3 Avaliable on Platform */}
			<div className="w-[80%] flex flex-col mt-5 mb-10 gap-y-5">
				{info.watchProviders && info.watchProviders.flatrate && (
					<div className="flex items-center text-white gap-5 ">
						<h1>Avaliable on Platform : </h1>
						{info.watchProviders.flatrate.map((w, i) => (
							<img
								key={i}
								title={w.provider_name}
								className="w-[5vh] h-[5vh] object-cover rounded"
								src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
								alt=""
							/>
						))}
					</div>
				)}
				{info.watchProviders && info.watchProviders.rent && (
					<div className="flex items-center text-white gap-5 ">
						<h1>Avaliable on Rent : </h1>
						{info.watchProviders.rent.map((w, i) => (
							<img
								key={i}
								title={w.provider_name}
								className="w-[5vh] h-[5vh] object-cover rounded"
								src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
								alt=""
							/>
						))}
					</div>
				)}
				{info.watchProviders && info.watchProviders.buy && (
					<div className="flex items-center text-white  gap-5">
						<h1>Avaliable to Buy : </h1>
						{info.watchProviders.buy.map((w, i) => (
							<img
								key={i}
								title={w.provider_name}
								className="w-[5vh] h-[5vh] object-cover rounded"
								src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
								alt=""
							/>
						))}
					</div>
				)}
			</div>

			{/* Part 4 Seasons */}
			<hr className="border-none mb-3 h-[2px] bg-zinc-500 " />
			<h1 className="text-2xl text-white font-bold mb-5">Seasons</h1>
			<HorizontalCards
				className=""
				data={info.detail.seasons.length > 0 && info.detail.seasons}
			/>

			{/* Part 5 Recommendations and Sililar Stuff */}
			<hr className="border-none mb-3 h-[2px] bg-zinc-500 " />
			<h1 className="text-2xl text-white font-bold mb-5">
				Recommended For You
			</h1>
			<HorizontalCards
				className=""
				data={
					info.recommendations.length > 0
						? info.recommendations
						: info.similar
				}
			/>
			<Outlet />
		</div>
	) : (
		<Loading />
	);
};

export default TvDetails;
