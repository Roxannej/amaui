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
      <path d="M21.75 9.675 17.025 4.95l.95-.975q.925-.9 2.175-.875 1.25.025 2.15.925l.425.45q.85.925.85 2.15 0 1.225-.9 2.1ZM5.4 24.325q-1.275 0-2.15-.875t-.875-2.15V8.1q0-1.275.875-2.15t2.15-.875h8.825L8.1 11.2q-.6.625-.95 1.45T6.8 14.4v2.475q0 1.275.875 2.15t2.15.875H12.3q.9 0 1.738-.35.837-.35 1.462-.975l6.125-6.1V21.3q0 1.275-.875 2.15t-2.15.875Zm4.775-6.3q-.6 0-1.05-.45-.45-.45-.45-1.05V14.55q0-.6.225-1.163.225-.562.675-.987l6.1-6.125L20.425 11 14.3 17.15q-.425.45-.988.662-.562.213-1.162.213Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareTwoTone;
