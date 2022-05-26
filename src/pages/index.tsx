import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';

export default function Home () {
	return (
		<React.Fragment>
			<Head>
				<title>Netflix - Assista a Séries e Filmes On-line</title>
			</Head>

			<Header />
		</React.Fragment>
	)
}
