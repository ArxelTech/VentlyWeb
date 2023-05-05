import React from 'react';
import * as icons from './icons';

export type IconName = keyof typeof icons;
export interface Props {
  icon: IconName;
  className?:string;
}


const Icon = ({ icon,className }: Props) => {
  const IconComp = icons[icon];
  if (IconComp)
    return (
        <IconComp className={className} />
    );
  throw new Error(`Unknown icon "${icon}"`);
};

export default Icon;
