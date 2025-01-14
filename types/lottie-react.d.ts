declare module "lottie-react" {
  import { CSSProperties } from "react";

  interface LottieProps {
    animationData: object;
    loop?: boolean;
    autoplay?: boolean;
    initialSegment?: [number, number];
    className?: string;
    style?: CSSProperties;
  }

  export default function Lottie(props: LottieProps): JSX.Element;
}
