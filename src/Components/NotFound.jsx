import { Link, useNavigate } from "react-router-dom";
import loader from "/404.gif";
const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="absolute w-screen h-screen flex justify-center items-center bg-black">
			{/* <Link
				onClick={() => navigate(-1)}
				className="hover:text-[#8573ff] mr-2 ri-close-fill text-3xl text-white absolute top-[5%] right-[5%]"></Link> */}
			<img
				className="bg-black text-black"
				src={loader}
				alt=""
			/>
		</div>
	);
};

export default NotFound;
