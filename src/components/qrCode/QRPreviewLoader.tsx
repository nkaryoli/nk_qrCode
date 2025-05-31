import { ScaleLoader } from "react-spinners";

export const QRPreviewLoader = () => (
	<div className="absolute inset-0 bg-background/90 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-lg">
		<ScaleLoader color="#FF5E1F"/>
	</div>
);