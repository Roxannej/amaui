import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxOutlined'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M6 14V10H4Q4 10 4 10Q4 10 4 10V20Q4 20 4 20Q4 20 4 20H20Q20 20 20 20Q20 20 20 20V10Q20 10 20 10Q20 10 20 10H10V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20Q22 20.825 21.413 21.413Q20.825 22 20 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H6V2H14V6H8V14ZM4 10V14V10Q4 10 4 10Q4 10 4 10V20Q4 20 4 20Q4 20 4 20Q4 20 4 20Q4 20 4 20V10Q4 10 4 10Q4 10 4 10Z"/>
    </Icon>
  )
});

export default IconMaterialMarkunreadMailboxOutlined;
