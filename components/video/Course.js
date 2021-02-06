import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Video from './Video.js'

const Course = () => {
	const [course, setCourse] = useState({})

	return (
		<>
			<h2>Course</h2>
			<Video />
		</>
	)
}

export default Course
