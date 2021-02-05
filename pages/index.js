import Head from 'next/head'
import Layout from '../components/layout/Layout.js'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>DevTube</title>
			</Head>

			<Layout>
				<h1>Content Area</h1>
			</Layout>
		</>
	)
}
