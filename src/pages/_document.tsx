import { Head, Html, Main, NextScript } from "next/document";

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="A Netflix redesign for learning and pratice purposes, using NextJS, TypeScript and TMDB API." />

				<link rel="shortcut icon" href="favicon.png" type="image/png" />

				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;1,300;1,400&display=swap" />

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
