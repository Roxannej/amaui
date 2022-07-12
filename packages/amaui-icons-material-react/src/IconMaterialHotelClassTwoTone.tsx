import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelClassTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassTwoTone'
      short_name='HotelClass'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="11,8.89 11.94,12 14.76,12 12.49,13.62 13.42,16.63 11,14.79 8.58,16.63 9.51,13.62 7.24,12 10.06,12"/><path d="M11,8.89L11.94,12h2.82l-2.27,1.62l0.93,3.01L11,14.79l-2.42,1.84l0.93-3.01L7.24,12h2.82L11,8.89z M8.58,10H1l6.17,4.41 L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44l-3.08,2.2l1.46,4.72 L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z"/>
    </Icon>
  )
});

export default IconMaterialHotelClassTwoTone;
