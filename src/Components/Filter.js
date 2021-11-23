import React from "react";
import ReactStars from "react-rating-stars-component";

function Filter({ rateFilter, changeRating, setInput, setRateFilter }) {
	return (
		<>
			<header>
				<h1 className="Title">Movies</h1>
				<div>
					<div className="Filter">
						<label htmlFor="Filter">FILTER BY RATING :</label>
						<ReactStars
							count={5}
							onChange={changeRating}
							size={30}
							value={rateFilter}
							activeColor="#ffd700"
						/>
						<button onClick={() => setRateFilter(0)}>RESET</button>
					</div>
					<input
						onChange={(e) => setInput(e.target.value)}
						type="text"
						placeholder="type to search..."
					></input>
				</div>
			</header>
			<hr />
		</>
	);
}

export default Filter;
