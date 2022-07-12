import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOutlinedW100'
      short_name='Power'

      {...props}
    >
      <path d="M11.2 19H12.8V16.85L16 13.65V9.8Q16 9.5 15.75 9.25Q15.5 9 15.2 9H8.8Q8.5 9 8.25 9.25Q8 9.5 8 9.8V13.65L11.2 16.85ZM10.5 19.7V17.15L7.3 13.95V9.8Q7.3 9.15 7.725 8.725Q8.15 8.3 8.8 8.3H9.75V4.3H10.45V8.3H13.55V4.3H14.25V8.3H15.2Q15.85 8.3 16.275 8.725Q16.7 9.15 16.7 9.8V13.95L13.5 17.15V19.7ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOutlinedW100;
