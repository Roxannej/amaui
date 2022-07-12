import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainRoundedW700Filled'
      short_name='Domain'

      {...props}
    >
      <path d="M4.375 22.15Q3.075 22.15 2.15 21.225Q1.225 20.3 1.225 19V5.775Q1.225 4.475 2.15 3.55Q3.075 2.625 4.375 2.625H9.625Q10.925 2.625 11.85 3.55Q12.775 4.475 12.775 5.775V6.625H19.625Q20.925 6.625 21.85 7.55Q22.775 8.475 22.775 9.775V19Q22.775 20.3 21.85 21.225Q20.925 22.15 19.625 22.15ZM4 19.375H6V17.375H4ZM4 15.375H6V13.375H4ZM4 11.375H6V9.375H4ZM4 7.375H6V5.375H4ZM8 19.375H10V17.375H8ZM8 15.375H10V13.375H8ZM8 11.375H10V9.375H8ZM8 7.375H10V5.375H8ZM12 19.375H20V9.375H12V11.375H14V13.375H12V15.375H14V17.375H12ZM16 13.375V11.375H18V13.375ZM16 17.375V15.375H18V17.375Z"/>
    </Icon>
  )
});

export default IconMaterialDomainRoundedW700Filled;
