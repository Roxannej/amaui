import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessMediumOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessMediumOutlinedW100'
      short_name='BrightnessMedium'

      {...props}
    >
      <path d="M12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6ZM12 20.5 14.5 18H18V14.5L20.5 12L18 9.5V6H14.5L12 3.5L9.5 6H6V9.5L3.5 12L6 14.5V18H9.5ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialBrightnessMediumOutlinedW100;
