import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import TvShows from "./Components/TvShows";
import Person from "./Components/Person";
import TvDetails from "./Components/TvDetails";
import MovieDetails from "./Components/MovieDetails";
import PersonDetails from "./Components/PersonDetails";
import Trailer from "./Components/Partials/Trailer";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
	return (
		<div className="w-screen h-screen bg-[#1F1E24] flex ">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/trending"
					element={<Trending />}
				/>
				<Route
					path="/popular"
					element={<Popular />}
				/>
				<Route
					path="/movie"
					element={<Movie />}
				/>

				<Route
					path="/movie/details/:id"
					element={<MovieDetails />}>
					<Route
						path="/movie/details/:id/trailer"
						element={<Trailer />}
					/>
				</Route>
				<Route
					path="/tv"
					element={<TvShows />}
				/>

				<Route
					path="/tv/details/:id"
					element={<TvDetails />}>
					{" "}
					<Route
						path="/tv/details/:id/trailer"
						element={<Trailer />}
					/>
				</Route>
				<Route
					path="/person"
					element={<Person />}
				/>
				<Route
					path="/person/details/:id"
					element={<PersonDetails />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</div>
	);
}

export default App;
