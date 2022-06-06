export function ImageDetailsPage({ activeResult, setShowDetail }) {
	return (
		<>
			<img
				alt="painting"
				src={`https://www.artic.edu/iiif/2/${activeResult.image_id}/full/843,/0/default.jpg`}
			/>
			<button onClick={() => setShowDetail(false)}>Back</button>
		</>
	);
}
