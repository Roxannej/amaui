import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainOutlinedW700'
      short_name='Domain'

      {...props}
    >
      <path d="M1.225 22.15V2.625H12.775V6.625H22.775V22.15ZM4 19.375H6V17.375H4ZM4 15.375H6V13.375H4ZM4 11.375H6V9.375H4ZM4 7.375H6V5.375H4ZM8 19.375H10V17.375H8ZM8 15.375H10V13.375H8ZM8 11.375H10V9.375H8ZM8 7.375H10V5.375H8ZM12 19.375H20V9.375H12V11.375H14V13.375H12V15.375H14V17.375H12ZM16 13.375V11.375H18V13.375ZM16 17.375V15.375H18V17.375Z"/>
    </Icon>
  )
});

export default IconMaterialDomainOutlinedW700;