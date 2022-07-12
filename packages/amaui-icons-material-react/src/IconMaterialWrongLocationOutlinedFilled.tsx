import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrongLocationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationOutlinedFilled'
      short_name='WrongLocation'

      {...props}
    >
      <path d="M16.875 8.05 15.475 6.65 17.575 4.55 15.475 2.45 16.875 1.05 18.975 3.15 21.075 1.05 22.475 2.45 20.375 4.55 22.475 6.65 21.075 8.05 18.975 5.95ZM12 12Q12.825 12 13.413 11.412Q14 10.825 14 10Q14 9.175 13.413 8.587Q12.825 8 12 8Q11.175 8 10.588 8.587Q10 9.175 10 10Q10 10.825 10.588 11.412Q11.175 12 12 12ZM12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q12.625 2 13.262 2.087Q13.9 2.175 14.475 2.4V9.05H19.925Q19.975 9.325 19.988 9.612Q20 9.9 20 10.2Q20 12.7 18.013 15.637Q16.025 18.575 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialWrongLocationOutlinedFilled;