import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadOutlined'
      short_name='MarkEmailRead'

      {...props}
    >
      <path d="M15.95 22 11.7 17.75 13.1 16.35 15.95 19.2 21.6 13.55 23 14.95ZM12 11 20 6H4ZM12 13 4 8V18Q4 18 4 18Q4 18 4 18H9.15L11.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V10.35L20 12.35V8ZM12 13Q12 13 12 13Q12 13 12 13ZM12 11ZM12 13Z"/>
    </Icon>
  )
});

export default IconMaterialMarkEmailReadOutlined;
