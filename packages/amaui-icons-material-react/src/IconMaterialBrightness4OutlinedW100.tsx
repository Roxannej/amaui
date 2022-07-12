import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4OutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4OutlinedW100'
      short_name='Brightness4'

      {...props}
    >
      <path d="M12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8ZM12 12ZM12 20.5 14.5 18H18V14.5L20.5 12L18 9.5V6H14.5L12 3.5L9.5 6H6V9.5L3.5 12L6 14.5V18H9.5ZM11.975 18Q14.475 18 16.238 16.25Q18 14.5 18 12Q18 9.5 16.238 7.75Q14.475 6 11.975 6Q11.325 6 10.713 6.15Q10.1 6.3 9.5 6.55Q11.125 7.275 12.062 8.762Q13 10.25 13 12Q13 13.75 12.062 15.238Q11.125 16.725 9.5 17.45Q10.1 17.7 10.713 17.85Q11.325 18 11.975 18Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness4OutlinedW100;