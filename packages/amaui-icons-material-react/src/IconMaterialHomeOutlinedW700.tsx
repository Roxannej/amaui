import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeOutlinedW700'
      short_name='Home'

      {...props}
    >
      <path d="M3.15 21.85V8.575L12 1.925L20.85 8.575V21.85H13.125V14.85H10.875V21.85ZM6.3 18.7H7.725V11.7H16.275V18.7H17.7V10.15L12 5.875L6.3 10.15ZM12 12.3Z"/>
    </Icon>
  )
});

export default IconMaterialHomeOutlinedW700;
