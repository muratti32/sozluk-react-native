import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClose(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="_close_svg__feather _close_svg__feather-x"
      {...props}
    >
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
}

export default SvgClose;
