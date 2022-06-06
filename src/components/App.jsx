import './App.css';
import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import React from 'react';
import { useState } from 'react';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [results, setResults] = useState([]);
	const [activeResult, setActiveResult] = useState(null);
	const [showDetail, setShowDetail] = useState(false);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/utils/api.js
		searchArtworks(query).then((json) => {
			console.log(json);
			setResults(json.data);
		});
	}

	const handleClick = (target) => {
		setActiveResult(target);
		setShowDetail(true);
	};

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{showDetail ? (
				<ImageDetailsPage
					activeResult={activeResult}
					setShowDetail={setShowDetail}
				/>
			) : (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{results.map((piece) => (
							<li key={piece.id}>
								<button onClick={() => handleClick(piece)}>
									{piece.title} by {piece.artist_title}{' '}
								</button>
							</li>
						))}
					</ul>
				</>
			)}
			<Footer />
		</div>
	);
}
