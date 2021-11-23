import React from "react";
import ReactStars from "react-rating-stars-component";

function MovieCard({ Movies, input, rateFilter }) {
	return (
		<main>
			{Movies.filter((movie) => {
				if (input === "") {
					return movie;
				} else if (
					movie.title
						.replace(/\s/g, "")
						.toLowerCase()
						.includes(input.replace(/\s/g, "").toLowerCase())
				) {
					return movie;
				}
				return false;
			})
				.filter((movie) => {
					if (rateFilter === 0) {
						return movie;
					} else if (movie.rating === rateFilter) {
						return movie;
					}
					return false;
				})
				.map((movie, index) => {
					return (
						<div className="MovieCard" key={movie.id}>
							<div className="Card">
								<img src={movie.posterURL} alt={movie.title} />
								<div className="Details">
									<h2 className="CardTitle">
										{movie.id}-{movie.title}
									</h2>
									<p className="CardDesc">{movie.description}</p>
								</div>
							</div>
							<div className="Rating">
								<h3>Rating : </h3>
								<ReactStars
									count={5}
									edit={true}
									onChange={(newRating) => (movie.rating = newRating)}
									size={35}
									value={movie.rating}
									activeColor="#ffd700"
								/>
							</div>
						</div>
					);
				})}
		</main>
	);
}

export default MovieCard;
