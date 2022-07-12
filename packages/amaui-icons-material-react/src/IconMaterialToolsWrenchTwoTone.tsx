import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsWrenchTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchTwoTone'
      short_name='ToolsWrench'

      {...props}
    >
      <path d="M5.775 3.125q0-.8.688-1.238Q7.15 1.45 8.5 1.45q2.85 0 4.85 2 2 2 2 4.85 0 .525-.075 1.025-.075.5-.25 1.025l6.625 6.6q.9.9.912 2.125.013 1.225-.862 2.125l-.225.225q-.9.9-2.15.925-1.25.025-2.15-.875l-6.65-6.65q-.475.15-.963.225-.487.075-1.037.075-2.825 0-4.825-2T1.7 8.3q0-1.375.438-2.062.437-.688 1.237-.688.375 0 .738.163.362.162.637.437l2 2L8.4 6.525 6.4 4.5q-.3-.275-.462-.638-.163-.362-.163-.737Z"/>
    </Icon>
  )
});

export default IconMaterialToolsWrenchTwoTone;
