import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAlertOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlertOutlinedW100Filled'
      short_name='AddAlert'

      {...props}
    >
      <path d="M11.65 14.65H12.35V12.65H14.35V11.95H12.35V9.95H11.65V11.95H9.65V12.65H11.65ZM4.65 18.65V17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V4.3Q11.15 3.925 11.387 3.687Q11.625 3.45 12 3.45Q12.375 3.45 12.613 3.687Q12.85 3.925 12.85 4.3V5Q14.85 5.35 16.1 6.887Q17.35 8.425 17.35 10.3V17.95H19.35V18.65ZM12 21.5Q11.4 21.5 10.95 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5Z"/>
    </Icon>
  )
});

export default IconMaterialAddAlertOutlinedW100Filled;
