import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kOutlinedW100Filled'
      short_name='2k'

      {...props}
    >
      <path d="M12.85 14.6H13.55V12.2L16 14.6H17.05L14.3 11.95L17.05 9.4H16.05L13.55 11.75V9.4H12.85ZM7 14.6H10.7V13.9H7.7V12.35H10Q10.3 12.35 10.5 12.15Q10.7 11.95 10.7 11.65V10.1Q10.7 9.8 10.5 9.6Q10.3 9.4 10 9.4H7V10.1H10V11.65H7.7Q7.4 11.65 7.2 11.85Q7 12.05 7 12.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterial2kOutlinedW100Filled;
