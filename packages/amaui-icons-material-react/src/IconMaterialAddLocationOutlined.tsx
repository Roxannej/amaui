import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationOutlined'
      short_name='AddLocation'

      {...props}
    >
      <path d="M11 14H13V11H16V9H13V6H11V9H8V11H11ZM12 19.35Q15.05 16.55 16.525 14.262Q18 11.975 18 10.2Q18 7.475 16.262 5.737Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2Q6 11.975 7.475 14.262Q8.95 16.55 12 19.35ZM12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.7 18.013 15.637Q16.025 18.575 12 22ZM12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Z"/>
    </Icon>
  )
});

export default IconMaterialAddLocationOutlined;
