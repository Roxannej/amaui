import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenOutlined'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6Q20 6 20 6Q20 6 20 6H17V4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V9ZM2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H7V6H4Q4 6 4 6Q4 6 4 6V9ZM17 20V18H20Q20 18 20 18Q20 18 20 18V15H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15H4V18Q4 18 4 18Q4 18 4 18H7V20ZM6 16V8H18V16ZM8 14H16V10H8ZM8 14V10V14Z"/>
    </Icon>
  )
});

export default IconMaterialFitScreenOutlined;