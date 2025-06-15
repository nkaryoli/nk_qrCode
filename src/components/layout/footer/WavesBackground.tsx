import { useIsMobile } from "@/hooks/useIsMobile";

const WavesBackground = () => {
    const isMobile = useIsMobile(800);
    const isTablet = useIsMobile(1300);

    const width = isMobile ? '500' : isTablet ? '800' :'1100';

    return (
        <svg
            className="absolute top-0 left-0 block w-full h-full"
            viewBox={`0 0 ${width} 900`}
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="bg">
                    <stop offset="0%" stopColor="rgba(227, 66, 3, 0.8)" />
                    <stop offset="50%" stopColor="rgba(252, 76, 120, 0.7)" />
                    <stop offset="80%" stopColor="rgba(255, 215, 0, 0.3)" />
                </linearGradient>

                <path
                    id="wave"
                    fill="url(#bg)"
                    d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
						s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859
						s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                />
            </defs>

            <g>
                <use xlinkHref="#wave" opacity="0.3">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        dur="10s"
                        calcMode="spline"
                        values="270 230; -334 180; 270 230"
                        keyTimes="0; .5; 1"
                        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                        repeatCount="indefinite"
                    />
                </use>
                <use xlinkHref="#wave" opacity="0.6">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        dur="8s"
                        calcMode="spline"
                        values="-270 230;243 220;-270 230"
                        keyTimes="0; .6; 1"
                        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                        repeatCount="indefinite"
                    />
                </use>

                <use xlinkHref="#wave" opacity="0.9">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        dur="6s"
                        calcMode="spline"
                        values="0 230;-140 200;0 230"
                        keyTimes="0; .4; 1"
                        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                        repeatCount="indefinite"
                    />
                </use>
            </g>
        </svg>
    );
};

export default WavesBackground;
