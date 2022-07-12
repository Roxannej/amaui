import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenWithOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithOutlinedW700'
      short_name='OpenWith'

      {...props}
    >
      <path d="M10.425 9.8V6.5L9.2 7.725L6.95 5.525L12 0.475L17.05 5.525L14.8 7.775L13.575 6.5V9.8ZM12 23.525 6.95 18.475 9.2 16.225 10.425 17.5V14.2H13.575V17.5L14.8 16.225L17.05 18.475ZM18.475 17.05 16.225 14.8 17.5 13.575H14.2V10.425H17.5L16.225 9.2L18.475 6.95L23.525 12ZM5.525 17.05 0.475 12 5.525 6.95 7.725 9.2 6.5 10.425H9.8V13.575H6.5L7.775 14.8Z"/>
    </Icon>
  )
});

export default IconMaterialOpenWithOutlinedW700;
