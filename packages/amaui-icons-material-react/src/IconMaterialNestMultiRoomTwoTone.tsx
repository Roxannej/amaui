import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestMultiRoomTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomTwoTone'
      short_name='NestMultiRoom'

      {...props}
    >
      <path d="M3.575 8.775 12 2.45l8.45 6.325Zm0 12.65h9.5V16.95h-9.5Zm11.375 0h5.5V16.95h-5.5Zm-11.375-6.35h5.5v-4.5h-5.5Zm7.375 0h9.5v-4.5h-9.5Z"/>
    </Icon>
  )
});

export default IconMaterialNestMultiRoomTwoTone;
