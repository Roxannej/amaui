import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffOutlinedW100'
      short_name='PowerOff'

      {...props}
    >
      <path d="M20.35 22 14.5 16.15 13.5 17.15V19.7H10.5V17.15L7.3 13.95V9.8Q7.3 9.525 7.35 9.35Q7.4 9.175 7.45 9.1L1.95 3.6L2.45 3.1L20.85 21.5ZM14 15.65 8 9.65V13.65L11.2 16.85V19H12.8V16.85ZM16.4 14.25 16 13.85V9.8Q16 9.5 15.75 9.25Q15.5 9 15.2 9H11.15L9.75 7.6V4.3H10.45V8.3H13.55V4.3H14.25V8.3H15.2Q15.775 8.3 16.238 8.7Q16.7 9.1 16.7 9.8V13.95ZM13.625 11.475Q13.625 11.475 13.625 11.475Q13.625 11.475 13.625 11.475ZM11 12.65Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOffOutlinedW100;
