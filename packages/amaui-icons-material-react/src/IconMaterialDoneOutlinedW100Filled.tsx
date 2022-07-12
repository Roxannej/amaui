import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlinedW100Filled'
      short_name='Done'

      {...props}
    >
      <path d="M9.55 17.1 4.8 12.35 5.3 11.85 9.55 16.1 18.7 6.95 19.2 7.45Z"/>
    </Icon>
  )
});

export default IconMaterialDoneOutlinedW100Filled;
