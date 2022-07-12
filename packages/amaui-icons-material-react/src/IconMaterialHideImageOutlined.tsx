import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageOutlined'
      short_name='HideImage'

      {...props}
    >
      <path d="M21 18.15 19 16.15V5Q19 5 19 5Q19 5 19 5H7.85L5.85 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM19.8 22.6 18.2 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.8L1.4 4.2L2.8 2.8L21.2 21.2ZM6 17 9 13 11.25 16 12.075 14.9 5 7.825V19Q5 19 5 19Q5 19 5 19H16.175L14.175 17ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialHideImageOutlined;