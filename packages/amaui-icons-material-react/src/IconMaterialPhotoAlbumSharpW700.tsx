import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumSharpW700'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M3.15 22.85V1.15H20.85V22.85ZM6.3 19.7H17.7V4.3H16.075V11.3L13.575 9.8L11.075 11.3V4.3H6.3ZM7 18H17L13.625 13.5L11 17L9.375 14.825ZM11.075 4.3H13.575H16.075ZM6.3 4.3H11.075H13.575H16.075H17.7H6.3Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumSharpW700;
