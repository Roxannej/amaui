import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseOutlined'
      short_name='House'

      {...props}
    >
      <path d="M5 20V12H2L12 3L16 6.6V4H19V9.3L22 12H19V20H13V14H11V20ZM7 18H9V12H15V18H17V10.2L12 5.7L7 10.2ZM9 12H12H15H9ZM10 10.025H14Q14 9.225 13.4 8.712Q12.8 8.2 12 8.2Q11.2 8.2 10.6 8.712Q10 9.225 10 10.025Z"/>
    </Icon>
  )
});

export default IconMaterialHouseOutlined;