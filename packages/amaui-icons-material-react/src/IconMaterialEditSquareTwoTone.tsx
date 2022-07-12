import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareTwoTone'
      short_name='EditSquare'

      {...props}
    >
      <path d="M5.4 24.325q-1.275 0-2.15-.875t-.875-2.15V8.1q0-1.275.875-2.15t2.15-.875h8.825L6.8 12.525V19.9h7.375l7.45-7.425V21.3q0 1.275-.875 2.15t-2.15.875Zm3.275-6.3V13.3l7-7.025L20.425 11 13.4 18.025Zm13.075-8.35L17.025 4.95l.95-.975q.925-.9 2.175-.875 1.25.025 2.15.925l.425.45q.85.925.85 2.15 0 1.225-.9 2.1Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareTwoTone;
