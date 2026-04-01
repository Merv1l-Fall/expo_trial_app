import { StyleProp, ViewStyle } from "react-native";
import Svg, {
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Polyline,
  Rect,
  Stop,
} from "react-native-svg";

type LogoProps = {
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export function Logo({ size = 64, style }: LogoProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={style}
    >
      {/* Book shape */}
      <Rect
        x="12"
        y="8"
        width="40"
        height="48"
        rx="2"
        fill="url(#bookGradient)"
      />
      
      {/* Book spine shadow */}
      <Path
        d="M 20 8 L 20 56 Q 20 56 12 56 L 12 8 Q 12 8 20 8 Z"
        fill="rgba(0,0,0,0.15)"
      />
      
      {/* Checkmark list items */}
      <G stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* First checkmark */}
        <Polyline points="26,22 30,26 38,18" fill="none" />
        
        {/* Second checkmark */}
        <Polyline points="26,32 30,36 38,28" fill="none" />
        
        {/* Third line (unchecked) */}
        <Line x1="26" y1="42" x2="38" y2="42" opacity="0.6" />
      </G>
      
      {/* Gradient definition */}
      <Defs>
        <LinearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#6366f1" />
          <Stop offset="100%" stopColor="#8b5cf6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
