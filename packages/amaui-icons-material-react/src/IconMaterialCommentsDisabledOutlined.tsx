import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledOutlined'
      short_name='CommentsDisabled'

      {...props}
    >
      <path d="M20.475 23.3 15.175 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.825Q2 4.825 2 4.825Q2 4.825 2 4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 18.875 16H20V4Q20 4 20 4Q20 4 20 4H6.875L4.875 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4ZM4 16H13.175L11.175 14H6V12H9.175L8.175 11H6V9H6.175L4 6.825V16Q4 16 4 16Q4 16 4 16ZM16.875 14 14.875 12H18V14ZM13.875 11 11.875 9H18V11ZM10.875 8 8.875 6H18V8ZM8.6 11.4Q8.6 11.4 8.6 11.4Q8.6 11.4 8.6 11.4ZM12.875 10Q12.875 10 12.875 10Q12.875 10 12.875 10Z"/>
    </Icon>
  )
});

export default IconMaterialCommentsDisabledOutlined;
