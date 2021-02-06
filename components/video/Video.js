// import video from 'video.js'
import { useState, useEffect } from 'react'

const Video = () => {
	const [video, setVideo] = useState({
		id: 'A63UxsQsEbU',
	})

	const embed = `https://www.youtube-nocookie.com/embed/`
	const url = `${embed}${video.id}`

	return (
		<>
			<h3>Video</h3>

			<iframe
				width="560"
				height="315"
				src={url}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</>
	)
}

export default Video
