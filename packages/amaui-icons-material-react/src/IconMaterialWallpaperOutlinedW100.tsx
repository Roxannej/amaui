import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWallpaperOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperOutlinedW100'
      short_name='Wallpaper'

      {...props}
    >
      <path d="M15.25 9.75Q14.825 9.75 14.538 9.462Q14.25 9.175 14.25 8.75Q14.25 8.325 14.538 8.037Q14.825 7.75 15.25 7.75Q15.675 7.75 15.963 8.037Q16.25 8.325 16.25 8.75Q16.25 9.175 15.963 9.462Q15.675 9.75 15.25 9.75ZM4.3 11V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H11V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V11ZM11 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V13H5V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H11ZM19 11V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H13V4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V11ZM13 19.7V19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V13H19.7V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM7.95 16.35 9.6 14.2 11.2 16.05 13.7 12.95 16.25 16.35Z"/>
    </Icon>
  )
});

export default IconMaterialWallpaperOutlinedW100;
