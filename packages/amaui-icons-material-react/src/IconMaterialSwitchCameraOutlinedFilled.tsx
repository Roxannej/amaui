import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchCameraOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraOutlinedFilled'
      short_name='SwitchCamera'

      {...props}
    >
      <path d="M9 17 10.4 15.6 8.85 14.05H15.15L13.6 15.6L15 17L19 13L15 9L13.6 10.4L15.2 12.05H8.8L10.4 10.4L9 9L5 13ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L9 3H15L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchCameraOutlinedFilled;
