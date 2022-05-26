import type { AppProps } from 'next/app';

import '../stylesheets/globalStyle.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component { ...pageProps } />
}
