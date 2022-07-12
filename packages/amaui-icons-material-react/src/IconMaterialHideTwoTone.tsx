import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideTwoTone'
      short_name='Hide'

      {...props}
    >
      <path d="M12.5 11.5V4.175H15.525V6.35L19.575 2.3L21.7 4.425L17.65 8.475H19.825V11.5ZM4.425 21.7 2.3 19.575 6.35 15.5H4.2V12.475H11.525V19.8H8.5V17.65Z"/>
    </Icon>
  )
});

export default IconMaterialHideTwoTone;
