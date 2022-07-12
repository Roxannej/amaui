import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSipOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipOutlinedFilled'
      short_name='Sip'

      {...props}
    >
      <path d="M11 15H13V9H11ZM14 15H15.5V13H18Q18.425 13 18.712 12.712Q19 12.425 19 12V10Q19 9.575 18.712 9.287Q18.425 9 18 9H14ZM15.5 11.5V10.5H17.5V11.5ZM5 15H9Q9.425 15 9.713 14.712Q10 14.425 10 14V12.25Q10 11.825 9.713 11.537Q9.425 11.25 9 11.25H6.5V10.5H10V9H6Q5.575 9 5.287 9.287Q5 9.575 5 10V11.75Q5 12.175 5.287 12.462Q5.575 12.75 6 12.75H8.5V13.5H5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialSipOutlinedFilled;
