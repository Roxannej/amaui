import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachFileTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileTwoTone'
      short_name='AttachFile'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 23c3.04 0 5.5-2.46 5.5-5.5V6h-1.5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5z"/>
    </Icon>
  )
});

export default IconMaterialAttachFileTwoTone;