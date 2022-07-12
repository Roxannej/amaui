import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusOutlinedW100Filled'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.8 13.85H17.5V12.35H19V11.65H17.5V10.15H16.8V11.65H15.3V12.35H16.8ZM11.2 14.6H11.9V12.2L14.35 14.6H15.4L12.65 11.95L15.4 9.4H14.4L11.9 11.75V9.4H11.2ZM8.1 14.6H8.8V9.4H6.6V10.1H8.1ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterial1kPlusOutlinedW100Filled;
