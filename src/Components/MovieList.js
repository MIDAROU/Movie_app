import React, { useState } from "react";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

function MovieList() {
	const [Movies, setMovies] = useState([
		{
			id: 1,
			title: " The Lord of the Rings: The Two Towers (2002)",
			description:
				"Seeing as The Two Towers is the lowest-rated movie in Peter Jackson's Lord of the Rings trilogy, it's quite apparent this series is beloved. The second film saw the fellowship divided as they attempted to defeat Sauron's forces of evil. The film is another grand fantasy epic with two standout elements, the first being the proper introduction of the character Gollum and the second being in the massive and thrilling battle sequence in the third act.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/LOTR.2towers.24x36_500x749.jpg?v=1615567873",
			rating: 4,
		},
		{
			id: 2,
			title: "Star Wars: Episode V - The Empire Strikes Back (1980) ",
			description:
				"It's perhaps shocking to some fans that no Star Wars film broke into the top ten. What is less surprising is that The Empire Strikes Back is the highest-rated film in the franchise. The story set in a galaxy far, far away told a much darker and more complex story this time around. As Darth Vader and the Empire close in on the heroes, Han Solo and Leia evade capture while Luke Skywalker seeks to learn more about the ways of the Jedi. With interesting growth for the returning characters and some iconic new ones turning up, this film truly showcased how much sequels can further a story.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c8b7160e7cb3014c642016d1491d9fc3_500x749.jpg?v=1573587467",
			rating: 5,
		},
		{
			id: 3,
			title: "Inception (2010)",
			description:
				"Christopher Nolan proved himself to be one of the most ambitious filmmakers around with his mind-bending crime film, Inception. The film follows a team of thieves with the ability to enter people's dreams and steal their ideas. Leonardo DiCaprio stars as the team's leader, looking to pull off one last score. The inventive idea of the film is backed by Nolan's stunning visuals. It makes for some unforgettable action sequences. It is much more than just another heist film and contains one of the most debated endings of all time.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9c592dee1ac813fcaf8c93557a487557_675ff711-4f45-4a98-95a5-0f97302b2126_500x749.jpg?v=1573618688",
			rating: 4,
		},
		{
			id: 4,
			title: "Forrest Gump (1994)",
			description:
				"Tom Hanks created perhaps his most iconic film character of all time with the titular character in Forrest Gump. The film follows the many misadventures of a simple yet sweet boy named Forrest as he inadvertently inserts himself into many of the biggest moments in American history. Hanks gives a wonderful performance, infusing this character with enough charm and heart to save him from seeming cartoonish. It is a funny, touching, and entertaining film that remains a crowd-pleasing adventure all these years later.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/77e810938fdaf6a8a6879aabef828d78_7b4c41f9-0c33-4b0e-acb3-93bad47e4347_500x749.jpg?v=1573587341",
			rating: 3,
		},
		{
			id: 5,
			title: "Fight Club (1999)",
			description:
				"David Fincher remains one of the most talented film-makers working today. His projects are often dark, but always compelling thanks to his own perfectionist approach and unique visual style. Fight Club stands as his most popular film and one of the most exciting films of the 1990s. The film stars Edward Norton as a mundane working man whose life is changed when he meets the mysterious Tyler Durden (Brad Pitt) and the two start a club for grown men to beat each other up. The dark humor, brutal violence, and warped philosophies make it a thrilling watch and the twist ending makes you want to rewatch the movie again and again.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/63e5f4b3406e1e5cb48a4f879184a5c5_f1a887b6-ff7f-4371-ae5d-5cd62e59a3ce_500x749.jpg?v=1573652623",
			rating: 2,
		},
		{
			id: 6,
			title: "The Lord Of The Rings: The Fellowship Of The Rings (2001)",
			description:
				"Peter Jackson's hugely popular fantasy trilogy kicked off with The Fellowship of the Rings. J.R.R. Tolkien's books were brought to life as fans were transported to Middle Earth where Frodo Baggins and a band of heroes set out to destroy the powerful One Ring before Sauron can use it for evil. The film wonderfully introduces this beautiful world and its characters. The simple yet thrilling quest is filled with fun, terror, and action. It's not hard to see why fans were immediately drawn to this franchise.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ed6db487795c315548239638f96f9afd_5695ffec-c889-4751-8ce0-451702db05ba_480x.progressive.jpg?v=1573590425",
			rating: 4,
		},
		{
			id: 7,
			title: "The Good, the Bad and the Ugly (1966)",
			description:
				"Westerns have been a Hollywood staple since the very beginning, but when the genre went over to Italy, it changed the Western forever. The so-called Spaghetti Westerns told more complex stories with unique styles of film-making that were unlike anything audiences had seen before. The Good, the Bad and the Ugly is the definitive entry in that subgenre. The film follows three deadly men on a quest to retrieve buried treasure in the midst of the Civil War. The movie helped popularize the Mexican Standoff trend which is still used in action movies today, made a star of Clint Eastwood and gave us one of the most iconic films scores of all time.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8d532ed951a9da78a2f82a6e1b712001_500x749.jpg?v=1573653741",
			rating: 1,
		},
		{
			id: 8,
			title: "Pulp Fiction (1994) ",
			description:
				"Quentin Tarantino is one of the most popular film-makers of all time. His unique voice, extensive film knowledge and penchant for mixing hilarious comedy with brutal violence helped to inspire a generation of film-makers. Pulp Fiction is regarded by many as his masterpiece, and it's hard to argue with that. The film intercuts between various stories set in the Los Angeles underworld. Tarantino takes familiar crime stories and gives them his own special twist. The film is unpredictable and fast-paced, with endlessly quotable dialogue all backed up by an amazing soundtrack. Often imitated but never duplicated.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulp_fiction_ver2_xlg_500x749.jpg?v=1581622299",
			rating: 2,
		},
		{
			id: 9,
			title: "The Lord of the Rings: The Return of the King (2003) ",
			description:
				"Few people thought adapting J.R.R. Tolkien's epic Lord of the Rings series for the big screen would be possible, but Peter Jackson proved them all wrong. With The Return of the King, Jackson managed to conclude one of the greatest film trilogies of all time in a truly satisfying way. The film brings the quest to destroy the One Ring to a big end. While the film gets ridiculed for dragging out its finale, Jackson and his team did a beautiful job bringing it all to a close in this emotional spectacle that features some truly amazing battle sequences.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c468809972e1fb4b7b0c56b07db68987_a25dc22c-c83a-479d-a241-10fa55e7b36b_500x749.jpg?v=1573588780",
			rating: 3,
		},
		{
			id: 10,
			title: "Schindler's List (1993)",
			description:
				"It's no surprise to see Steven Spielberg's name appear on the list of the top rated films of all time. Given his penchant for creating beloved films, there were a number that could conceivably be in the top 10. However, it is his most difficult movie to watch which ranks the highest, which is appropriate as it is one of his finest jobs as a director. Schindler's List is a harrowing story of the real-life tale of Oskar Schindler and his attempts to save Jewish citizens during the Nazi rule in Germany. While Schindler may be an inspiring hero, the film is most effective as a horrific depiction of the Holocaust. Shot in haunting black and white, Spielberg created a film that will last in the minds of viewers for years to come.",
			posterURL:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9a1f9ea4a27071481cc1263e3ea11f7b_7bdb2deb-dd50-41b5-beab-8fc1cb3c895d_500x749.jpg?v=1573651233",
			rating: 5,
		},
	]);
	const changeRating = (newRating) => {
		setRateFilter(newRating);
	};
	const [rateFilter, setRateFilter] = useState(0);
	const [input, setInput] = useState("");
	return (
		<>
			<Filter
				rateFilter={rateFilter}
				changeRating={changeRating}
				input={input}
				setInput={setInput}
				setRateFilter={setRateFilter}
			/>
			<AddMovie Movies={Movies} setMovies={setMovies} />
			<MovieCard
				Movies={Movies}
				setMovies={setMovies}
				rateFilter={rateFilter}
				input={input}
			/>
		</>
	);
}

export default MovieList;
