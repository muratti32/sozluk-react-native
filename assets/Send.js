import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSend(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="send_svg__feather send_svg__feather-send"
      {...props}
    >
      <Path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </Svg>
  );
}

export default SvgSend;
