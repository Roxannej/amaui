import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSharpW700'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M10.7 13.3H18.7V7.3H10.7ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7V6.3ZM4.3 17.7H19.7V6.3H4.3ZM12.7 11.3V9.3H16.7V11.3Z"/>
    </Icon>
  )
});

export default IconMaterialPictureInPictureSharpW700;
