import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { asyncLoadperson, removeperson } from "../store/actions/personActions";
import HorizontalCards from "./Partials/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./Partials/Dropdown";
const PersonDetail = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { info } = useSelector((state) => state.person);
	const { id } = useParams();
	const dispatch = useDispatch();
	const [category, setCategory] = useState("movie");
	document.title = `ShadFlix - Person + ${category.toUpperCase()}`;
	// console.log(info);
	useEffect(() => {
		dispatch(asyncLoadperson(id));
		return () => {
			dispatch(removeperson());
		};
	}, [id]);
	// console.log(info);
	return info ? (
		<div className=" w-screen px-[5%] h-[180vh] bg-[#1F1E24]">
			{/* Part 1 navigation */}

			<nav className="h-[10vh] w-full text-zinc-50 flex items-center gap-10  text-lg">
				<Link
					onClick={() => navigate(-1)}
					className="hover:text-[#8573ff] mr-2 ri-arrow-left-line"></Link>
			</nav>
			<div className="flex">
				{/* Part 2 left poster and details */}
				<div className="w-[22%] ">
					<img
						className="h-[450px] w-[300px] object-cover rounded-md"
						src={`https://image.tmdb.org/t/p/original/${
							info.detail.poster_path ||
							info.detail.backdrop_path ||
							info.detail.profile_path
						}`}
						alt=""
					/>
					<hr className="border-none mb-3 h-[2px] bg-zinc-500 mt-5 " />
					<div className="text-white text-xl flex gap-5">
						<a
							href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
							<i className="ri-global-line"></i>
						</a>
						{info.externalid.facebook_id && (
							<a
								href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
								<i className="ri-facebook-circle-fill"></i>
							</a>
						)}

						{info.externalid.instagram_id && (
							<a
								href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
								<i className="ri-instagram-line"></i>
							</a>
						)}
						{info.externalid.youtube_id && (
							<a
								href={`https://www.youtube.com/@${info.externalid.youtube_id}`}>
								<i className="ri-youtube-fill"></i>
							</a>
						)}
						{info.externalid.twitter_id && (
							<a
								href={`https://x.com/${info.externalid.twitter_id}`}>
								<i className="ri-twitter-x-fill"></i>
							</a>
						)}
						{info.externalid.imdb_id && (
							<a
								className="font-semibold text-lg"
								href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}>
								IMDb
							</a>
						)}
					</div>
					{/* Personal Details */}
					<h1 className="text-xl font-semibold text-zinc-300 my-2">
						Personal Info
					</h1>
					<h1 className="font-semibold text-zinc-300 text-lg">
						Konwn For
					</h1>
					<h1 className=" text-zinc-300  ">
						{info.detail.known_for_department}
					</h1>
					<h1 className="font-semibold text-zinc-300 text-lg mt-3">
						Gender
					</h1>
					<h1 className=" text-zinc-300  ">
						{info.detail.gender == 2 ? "Male" : "Femail"}
					</h1>
					<h1 className="font-semibold text-zinc-300 text-lg mt-3">
						Birthday
					</h1>
					<h1 className=" text-zinc-300  ">{info.detail.birthday}</h1>
					{info.detail.deathday ? (
						<>
							{" "}
							<h1 className="font-semibold text-zinc-300 text-lg mt-3">
								Birthday
							</h1>
							<h1 className=" text-zinc-300  ">
								{info.detail.birthday}
							</h1>
						</>
					) : null}
					<h1 className="font-semibold text-zinc-300 text-lg mt-3">
						Place of Birth
					</h1>
					<h1 className=" text-zinc-300  ">
						{info.detail.place_of_birth}
					</h1>
					<h1 className="font-semibold text-zinc-300 text-lg mt-3">
						Also Known AS
					</h1>

					{info.detail.also_known_as.map((e) => (
						<p className="text-zinc-300 mb-1">{e}</p>
					))}
				</div>

				{/* Part 3 Right details and information */}
				<div className="w-[75%] ml-[3%]">
					<h1 className="text-5xl font-black text-zinc-300 mb-5">
						{info.detail.name}
					</h1>
					<h1 className="font-semibold text-zinc-300 text-xl my-2">
						Biography
					</h1>
					<p className=" text-zinc-300 ">{info.detail.biography}</p>

					<h1 className="text-zinc-300 text-xl font-semibold my-4">
						Known For
					</h1>
					<HorizontalCards data={info.combinedCredits.cast} />

					<div className="w-full flex justify-between">
						<h1 className="text-zinc-300 text-xl font-semibold my-4">
							Acting
						</h1>
						<Dropdown
							title={"Category"}
							options={["tv", "movie"]}
							func={(e) => setCategory(e.target.value)}
						/>
					</div>
					<div className="w-full h-[50vh] text-zinc-300 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.2)] border-2 border-zinc-700 p-5">
						{info[category + "Credits"].cast.map((c, i) => (
							<li className="hover:text-white duration-250 p-5">
								<Link
									key={i}
									to={`/${category}/details/${c.id}`}>
									<span>
										{c.title ||
											c.name ||
											c.original_title ||
											c.original_name}
									</span>
									<span className="block ml-5">
										<span className="text-zinc-400">
											as
										</span>{" "}
										: {c.character}
									</span>
								</Link>
							</li>
						))}
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default PersonDetail;
