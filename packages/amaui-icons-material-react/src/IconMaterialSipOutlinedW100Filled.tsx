import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSipOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipOutlinedW100Filled'
      short_name='Sip'

      {...props}
    >
      <path d="M11.65 14.6H12.35V9.4H11.65ZM14.4 14.6H15.1V12.6H17.9Q18.2 12.6 18.4 12.4Q18.6 12.2 18.6 11.9V10.1Q18.6 9.8 18.4 9.6Q18.2 9.4 17.9 9.4H14.4ZM15.1 11.9V10.1H17.9V11.9ZM5.4 14.6H8.9Q9.2 14.6 9.4 14.4Q9.6 14.2 9.6 13.9V12.35Q9.6 12.05 9.4 11.85Q9.2 11.65 8.9 11.65H6.1V10.1H9.6V9.4H6.1Q5.8 9.4 5.6 9.6Q5.4 9.8 5.4 10.1V11.65Q5.4 11.95 5.6 12.15Q5.8 12.35 6.1 12.35H8.9V13.9H5.4ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialSipOutlinedW100Filled;
