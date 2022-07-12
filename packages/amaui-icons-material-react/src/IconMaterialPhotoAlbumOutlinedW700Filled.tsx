import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumOutlinedW700Filled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M6.3 22.85Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V4.3Q3.15 2.975 4.062 2.062Q4.975 1.15 6.3 1.15H17.7Q19.025 1.15 19.938 2.062Q20.85 2.975 20.85 4.3V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85ZM7 18H17L13.625 13.5L11 17L9.375 14.825ZM11.075 4.3V11.3L13.575 9.8L16.075 11.3V4.3Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumOutlinedW700Filled;