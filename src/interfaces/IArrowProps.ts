import { CSSProperties } from "react";

export default interface IArrowProps {
	className?: string;
	style?: CSSProperties;

	onClick?: () => void;
}
