import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinInvokeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeOutlined'
      short_name='PinInvoke'

      {...props}
    >
      <path d="M10.05 16.375 8.65 14.95 11.6 12H9.35V10H15V15.65H13V13.425ZM19 10Q17.75 10 16.875 9.125Q16 8.25 16 7Q16 5.75 16.875 4.875Q17.75 4 19 4Q20.25 4 21.125 4.875Q22 5.75 22 7Q22 8.25 21.125 9.125Q20.25 10 19 10ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H14V6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V12H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialPinInvokeOutlined;