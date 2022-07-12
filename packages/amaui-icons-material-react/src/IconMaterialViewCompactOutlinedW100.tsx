import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactOutlinedW100'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM20 11.65V6H4V11.65ZM9.2 18H20V12.35H9.2ZM4 18H8.5V12.35H4Z"/>
    </Icon>
  )
});

export default IconMaterialViewCompactOutlinedW100;