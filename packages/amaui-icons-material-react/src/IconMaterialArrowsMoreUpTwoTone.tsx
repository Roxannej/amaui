import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpTwoTone'
      short_name='ArrowsMoreUp'

      {...props}
    >
      <path d="M18.05 14.45q-.6 0-1.05-.45-.45-.45-.45-1.05v-7.5h-7.5Q8.45 5.45 8 5q-.45-.45-.45-1.05 0-.625.45-1.075.45-.45 1.05-.45h9q.625 0 1.075.45.45.45.45 1.075v9q0 .6-.45 1.05-.45.45-1.075.45ZM12.9 19.6q-.6 0-1.05-.45-.45-.45-.45-1.05v-7.5H3.9q-.6 0-1.05-.45Q2.4 9.7 2.4 9.1q0-.625.45-1.075.45-.45 1.05-.45h9q.625 0 1.075.45.45.45.45 1.075v9q0 .6-.45 1.05-.45.45-1.075.45Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreUpTwoTone;
