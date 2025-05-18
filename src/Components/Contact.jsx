import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Contact = () => {
	document.title = `ShadFlix - Contact US`;
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
					Contact US
				</h1>
				<p>
					Have questions, suggestions, or found something that needs
					fixing? We'd love to hear from you!
				</p>
				<br />
				<p>
					<b>Support & Feedback: </b>
					Whether you're reporting a bug, suggesting a feature, or
					just saying hello — reach out anytime
				</p>
				<br />
				<p>
					<i className="ri-mail-line text-xl"></i>
					<b>Email: </b>shadalam0024@gmail.com
				</p>
				<Link to="https://github.com/mdshad01">
					<i className="ri-github-fill text-xl"></i>
					<b>Github id: </b>mdshad01
				</Link>
				<br />
				<p className="mt-4">
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

export default Contact;
