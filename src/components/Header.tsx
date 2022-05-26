import { useEffect, useState } from 'react';

import styles from '../stylesheets/components/Header.module.css';

export default function Header () {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		}
	}, []);

	return (
		<header className={`${ styles.header } ${  isScrolled && styles.isScrolled }`}>
			<picture className={ styles.logo }>
				<img src="/netflix-logo.svg" alt="Netflix" />
			</picture>

			<div className={ styles.toolbar }>
				<picture className={ styles.userProfile }>
					<img src="/user-profile.png" alt="User Profile" />
				</picture>
			</div>
		</header>
	)
}
