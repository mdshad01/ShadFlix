import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
	document.title = `ShadFlix - About`;
	const navigate = useNavigate();
	return (
		<div className=" w-screen px-[5%] h-[180vh] bg-[#1F1E24]">
			<nav className="h-[10vh] w-full text-zinc-50 flex items-center gap-10  text-lg">
				<Link
					onClick={() => navigate(-1)}
					className="hover:text-[#8573ff] mr-2 ri-arrow-left-line"></Link>
			</nav>
			<div className="text-zinc-200 pl-10 w-[80%] text-lg">
				<h1 className="text-4xl text-zinc-200  font-black my-8">
					About ShadFlix
				</h1>
				<p>
					Welcome to ShadFlix – your ultimate destination for
					discovering everything about movies and TV shows. Powered by
					the <b>TMDB</b> database, ShadFlix brings you the latest in
					entertainment, from trending titles and popular releases to
					detailed profiles of your favorite actors.
				</p>
				<br />
				<p>
					Whether you're searching for your next binge-worthy series,
					curious about cast details, or exploring filmographies,
					ShadFlix makes it easy to stay informed and inspired. We
					don’t stream content, but we help you explore it better.
				</p>
				<br />
				<p>
					Stay connected with the world of entertainment – only on{" "}
					<b className="text-lg">ShadFlix</b>.
				</p>
				<br />
				<p>
					<i>
						<b>Note:</b> ShadFlix does not stream or host any full
						movies or TV shows. We provide details and trailers
						sourced from publicly available APIs, including TMDB and
						YouTube. All data is for informational purposes only.
					</i>
				</p>
			</div>
			<div className="mt-10 pl-10 w-[80%]">
				<Link
					to="/"
					className="bg-[#6556cd]  text-white py-3 px-6 rounded-md font-semibold">
					Start browsing
				</Link>
			</div>
		</div>
	);
};

export default About;
