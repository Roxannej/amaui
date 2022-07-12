import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWallpaperOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperOutlined'
      short_name='Wallpaper'

      {...props}
    >
      <path d="M15.5 10Q14.85 10 14.425 9.575Q14 9.15 14 8.5Q14 7.85 14.425 7.425Q14.85 7 15.5 7Q16.15 7 16.575 7.425Q17 7.85 17 8.5Q17 9.15 16.575 9.575Q16.15 10 15.5 10ZM3 11V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11V5H5Q5 5 5 5Q5 5 5 5V11ZM11 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V13H5V19Q5 19 5 19Q5 19 5 19H11ZM19 11V5Q19 5 19 5Q19 5 19 5H13V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V11ZM13 21V19H19Q19 19 19 19Q19 19 19 19V13H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6 17 9 13 11.25 16 14.25 12 18 17Z"/>
    </Icon>
  )
});

export default IconMaterialWallpaperOutlined;