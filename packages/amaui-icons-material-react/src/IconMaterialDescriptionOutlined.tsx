import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionOutlined'
      short_name='Description'

      {...props}
    >
      <path d="M8 18H16V16H8ZM8 14H16V12H8ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 9V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H18Q18 20 18 20Q18 20 18 20V9ZM6 4V9V4V9V20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20V4Q6 4 6 4Q6 4 6 4Z"/>
    </Icon>
  )
});

export default IconMaterialDescriptionOutlined;