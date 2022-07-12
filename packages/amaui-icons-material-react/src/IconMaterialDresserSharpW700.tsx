import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDresserSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DresserSharpW700'
      short_name='Dresser'

      {...props}
    >
      <path d="M3.05 21.95V5.2q0-1.325.913-2.238.912-.912 2.237-.912h11.6q1.325 0 2.238.912.912.913.912 2.238v16.75H17.8v-2H6.2v2ZM6.2 10.625h4.525V5.2H6.2Zm7.1-4h4.5V5.2h-4.5Zm0 4h4.5V9.2h-4.5Zm-3.875 5.95h5.15V14h-5.15ZM6.2 13.2v4.175h11.6V13.2Zm0 4.175V13.2v4.175Z"/>
    </Icon>
  )
});

export default IconMaterialDresserSharpW700;
