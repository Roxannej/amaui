import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGooglePlusReshareTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GooglePlusReshareTwoTone'
      short_name='GooglePlusReshare'

      {...props}
    >
      <path d="M2.5 19.425V14.95Q2.5 12.675 4.088 11.087Q5.675 9.5 7.95 9.5H15.75L12.725 6.475L14.85 4.35L21.5 11L14.85 17.65L12.725 15.525L15.75 12.525H7.95Q6.925 12.525 6.225 13.225Q5.525 13.925 5.525 14.95V19.425Z"/>
    </Icon>
  )
});

export default IconMaterialGooglePlusReshareTwoTone;
