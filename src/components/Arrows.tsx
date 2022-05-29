import IArrowProps from '../interfaces/IArrowProps';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import styles from '../stylesheets/components/Arrows.module.css';

export const NavigatePrevious = ({ className, onClick }: IArrowProps) => (
	<button type="button" onClick={ onClick } className={ `${ className } ${ styles.arrows } ${ styles.navPrev }` }>
		<NavigateBeforeIcon titleAccess="Previous" style={{ fontSize: 50 }} />
	</button>
);

export const NavigateNext = ({ className, onClick }: IArrowProps) => (
	<button type="button" onClick={ onClick } className={ `${ className } ${ styles.arrows } ${ styles.navNext }`}>
		<NavigateNextIcon titleAccess="Next" style={{ fontSize: 50 }} />
	</button>
);

