import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSipOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipOutlinedW700Filled'
      short_name='Sip'

      {...props}
    >
      <path d="M11.2 15H12.8V9H11.2ZM13.8 15H15.3V13H17.8Q18.225 13 18.513 12.712Q18.8 12.425 18.8 12V10Q18.8 9.575 18.513 9.287Q18.225 9 17.8 9H13.8ZM15.3 11.5V10.5H17.3V11.5ZM5.2 15H9.2Q9.625 15 9.913 14.712Q10.2 14.425 10.2 14V12.25Q10.2 11.825 9.913 11.537Q9.625 11.25 9.2 11.25H6.7V10.5H10.2V9H6.2Q5.775 9 5.488 9.287Q5.2 9.575 5.2 10V11.75Q5.2 12.175 5.488 12.462Q5.775 12.75 6.2 12.75H8.7V13.5H5.2ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSipOutlinedW700Filled;
