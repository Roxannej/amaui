import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumOutlinedW100Filled'
      short_name='PhotoAlbum'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM7.95 17.35H16.25L13.7 13.95L11.2 17.05L9.6 15.2ZM12.3 4V9.85L14.15 8.75L16 9.85V4Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoAlbumOutlinedW100Filled;
