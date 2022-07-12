import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSystemUpdateAltOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltOutlined'
      short_name='SystemUpdateAlt'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9V6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H15V4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM12 15.4 7 10.4 8.4 9 11 11.6V4H13V11.6L15.6 9L17 10.4Z"/>
    </Icon>
  )
});

export default IconMaterialSystemUpdateAltOutlined;
