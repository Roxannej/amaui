import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledOutlinedFilled'
      short_name='CommentsDisabled'

      {...props}
    >
      <path d="M20.475 23.3 15.175 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.825Q2 4.825 2 4.825Q2 4.825 2 4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 16.875 14H18V12H14.875L13.875 11H18V9H11.875L10.875 8H18V6H8.875L4.875 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4ZM6 14H11.175L9.175 12H6ZM6 11H8.175L6.175 9H6Z"/>
    </Icon>
  )
});

export default IconMaterialCommentsDisabledOutlinedFilled;
