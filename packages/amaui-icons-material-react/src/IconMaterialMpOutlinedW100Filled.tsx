import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpOutlinedW100Filled'
      short_name='Mp'

      {...props}
    >
      <path d="M13.9 14.6H14.6V13.1H16.9Q17.2 13.1 17.4 12.9Q17.6 12.7 17.6 12.4V10.1Q17.6 9.8 17.4 9.6Q17.2 9.4 16.9 9.4H13.9ZM14.6 12.4V10.1H16.9V12.4ZM6.4 14.6H7.1V10.1H8.9V13.1H9.6V10.1H11.4V14.6H12.1V10.1Q12.1 9.8 11.9 9.6Q11.7 9.4 11.4 9.4H7.1Q6.8 9.4 6.6 9.6Q6.4 9.8 6.4 10.1ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialMpOutlinedW100Filled;
