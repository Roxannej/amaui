import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumOutlinedFilled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM7 18H17L13.625 13.5L11 17L9.375 14.825ZM11 4V11L13.5 9.5L16 11V4Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumOutlinedFilled;
