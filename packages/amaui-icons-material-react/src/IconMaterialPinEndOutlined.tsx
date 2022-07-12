import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinEndOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndOutlined'
      short_name='PinEnd'

      {...props}
    >
      <path d="M13.95 14.375 11 11.425V13.65H9V8H14.65V10H12.4L15.35 12.95ZM19 20Q17.75 20 16.875 19.125Q16 18.25 16 17Q16 15.75 16.875 14.875Q17.75 14 19 14Q20.25 14 21.125 14.875Q22 15.75 22 17Q22 18.25 21.125 19.125Q20.25 20 19 20ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V12H20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18H14V20Z"/>
    </Icon>
  )
});

export default IconMaterialPinEndOutlined;
