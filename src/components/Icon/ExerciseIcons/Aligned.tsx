import React, { FC } from 'react';
import SVG, { Path, G, Ellipse } from 'react-native-svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Props } from '@/components/Icon/ExerciseIcons/types';

const Aligned: FC<Props> = (
  { height, width, home = true, styleType },
  props
) => {
  let style;

  if (!home) style = { ...styleType };
  else {
    style = {
      left: wp('33%'),
      top: hp('1%'),
    };
  }

  return (
    <SVG
      height={height ?? hp('20%')}
      viewBox="0 0 512 512"
      width={width ?? wp('35%')}
      style={style}
      {...props}
    >
      <Path
        d="M106.907 34.277c53.388 0 89.269 29.518 96.668 63.699 7.163 33.086-19.334 63.698-96.668 63.698S3.076 131.062 10.239 97.976c7.399-34.181 43.279-63.699 96.668-63.699z"
        fill="#8eafe2"
      />
      <Path
        d="M84.079 36.203C43.39 43.262 16.527 68.929 10.238 97.975c-7.163 33.086 19.334 63.699 96.668 63.699 10.015 0 19.17-.518 27.516-1.483C58.913 141.31 66.458 60.906 84.079 36.203z"
        fill="#7c93dd"
      />
      <Path
        d="M405.094 84.536c-53.388 0-89.268 19.274-96.668 41.592-7.163 21.604 19.334 41.592 96.668 41.592 77.335 0 103.831-19.988 96.668-41.592-7.4-22.318-43.28-41.592-96.668-41.592z"
        fill="#cde9fa"
      />
      <Path
        d="M383.617 85.651c-41.442 4.389-68.834 21.303-75.191 40.478-6.928 20.896 17.637 40.279 89.232 41.527-50.647-14.131-31.608-63.786-14.041-82.005z"
        fill="#a2ddfd"
      />
      <Path
        d="M405.094 3.438c-53.388 0-89.268 19.274-96.668 41.592-7.163 21.604 19.334 41.592 96.668 41.592 77.335 0 103.831-19.988 96.668-41.592-7.4-22.318-43.28-41.592-96.668-41.592z"
        fill="#8eafe2"
      />
      <Path
        d="M256 508.562c183.523 0 175.05-50.244 164.476-75.68C400.75 385.431 334.87 238.099 256 238.099S131.394 373.331 91.524 432.882c-15.325 22.891-12.041 75.68 164.476 75.68z"
        fill="#cde9fa"
      />
      <Path
        d="M256 238.099c-31.18 0-57.178 21.143-79.685 50.381 28.573.708 57.635.902 86.36.902 13.993 0 45.208.6 77.47.998-24.787-30.01-53.483-52.281-84.145-52.281z"
        fill="#a2ddfd"
      />
      <Path
        d="M262.675 254.355c-88.611 0-175.286-1.84-241.974-13.964-8.95-1.627-16.145-8.32-18.326-17.152-4.923-19.938-2.111-40.561 7.677-55.173 17.404-25.98 400.155-5.627 476.493-.857 8.31.519 15.786 5.421 19.322 12.958 10.788 22.997 5.668 62.956-2.53 69.066-14.15 10.549-195.778 5.122-240.662 5.122z"
        fill="#a2ddfd"
      />
      <Ellipse cx={174.042} cy={395.805} fill="#fff" rx={30.241} ry={24.082} />
      <Ellipse cx={337.958} cy={395.805} fill="#fff" rx={30.241} ry={24.082} />
      <Path
        d="M256 370.218c-11.997 0-22.681-8.062-29.401 1.88-6.816 10.085 8.45 25.723 29.401 25.723s36.217-15.638 29.401-25.723c-6.72-9.941-17.404-1.88-29.401-1.88z"
        fill="#4b5165"
      />
      <G fill="#4b5165">
        <Path d="M191.666 378.458a25.2 25.2 0 01-19.001-8.653 7.5 7.5 0 0111.308-9.855c1.943 2.229 4.747 3.508 7.692 3.508s5.75-1.279 7.693-3.508a7.501 7.501 0 0111.309 9.855 25.2 25.2 0 01-19.001 8.653zM320.334 378.458a25.202 25.202 0 01-19.002-8.653 7.499 7.499 0 01.728-10.582 7.5 7.5 0 0110.581.727 10.206 10.206 0 007.693 3.508c2.945 0 5.749-1.279 7.693-3.509a7.5 7.5 0 0111.307 9.856 25.202 25.202 0 01-19 8.653z" />
      </G>
      <G fill="#a2ddfd">
        <Path d="M350.986 465.886a7.5 7.5 0 01-5.304-12.804l15.492-15.491c2.929-2.93 7.678-2.929 10.607 0s2.929 7.678 0 10.606l-15.492 15.491a7.475 7.475 0 01-5.303 2.198zM299.819 464.769a7.5 7.5 0 01-5.303-12.804l16.404-16.403a7.498 7.498 0 0110.606 0 7.498 7.498 0 01-.001 10.606l-16.404 16.403a7.467 7.467 0 01-5.302 2.198z" />
      </G>
      <Path
        d="M383.617 4.552c-41.442 4.389-68.834 21.303-75.191 40.478-6.928 20.896 17.637 40.279 89.232 41.527-50.647-14.131-31.608-63.786-14.041-82.005z"
        fill="#7c93dd"
      />
    </SVG>
  );
};

export default Aligned;
