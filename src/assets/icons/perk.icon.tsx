import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const PerkIcon = (props: SvgProps) => (
  <Svg width={45} height={45} fill='none' viewBox='0 0 34 34' {...props}>
    <Path
      stroke='#000'
      strokeWidth={2}
      d='M21.319 7.989c-2.488-1.437-2.488-5.048 0-6.485 2.489-1.436 5.616.37 5.616 3.242 0 2.874-3.127 4.68-5.616 3.243ZM5.581 31.535c.811-1.142 7.39-10.674 8.325-10.902.948.262 2.884.833 2.73 1.112-.196.356-2.118 2.887-2.252 3.56-.135.673.874 2.525 2.45 1.375 1.577-1.15 5.019-5.448 4.649-6.458-.37-1.01-2.563-2.47-5.015-3.467-.067-.169 1.782-1.986 2.756-3.67.183-.315 3.53 4.006 4.606 3.804 1.63-.306 6.763-4.645 7.065-5.487.303-.841-.04-1.818-1.16-2.588-1.122-.77-3.956 4.002-5.704 3.8-1.168-.135-1.935-2.928-4.706-4.645-2.43-1.507-6.208-2.055-7.132-1.94-1.043.13-3.558 2.478-6.987 6.114-1.114 1.181 1.283 3.323 2.286 2.592 3.036-2.212 4.925-4.961 5.62-4.936.696.025 2.35.94 2.35.94S4.192 26.645 2.988 29.04c-1.318 2.625 1.781 3.636 2.593 2.494ZM0 2.5h17m-17 5h6m-6 11h7.5M0 22h5'
    />
  </Svg>
);
