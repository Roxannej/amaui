import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness6OutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6OutlinedW100Filled'
      short_name='Brightness6'

      {...props}
    >
      <path d="M12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness6OutlinedW100Filled;
