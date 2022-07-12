import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLevelTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelTwoTone'
      short_name='ToolsLevel'

      {...props}
    >
      <path d="M4.35 17.675q-1.275 0-2.15-.875t-.875-2.15V9.325q0-1.25.875-2.137.875-.888 2.15-.888h15.325q1.25 0 2.137.888.888.887.888 2.137v5.325q0 1.275-.888 2.15-.887.875-2.137.875ZM9 10.65h1.625V9.325H9q-.25 0-.45.2t-.2.475q0 .25.2.45t.45.2Zm4.4 0H15q.275 0 .475-.2.2-.2.2-.45 0-.275-.2-.475-.2-.2-.475-.2h-1.6Z"/>
    </Icon>
  )
});

export default IconMaterialToolsLevelTwoTone;
