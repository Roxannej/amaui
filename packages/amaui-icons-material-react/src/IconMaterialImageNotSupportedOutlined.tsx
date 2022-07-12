import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedOutlined'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21Q18.175 21 18.175 21Q18.175 21 18.175 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.825Q3 5.825 3 5.825Q3 5.825 3 5.825L0.7 3.5L2.1 2.1L21.9 21.9ZM5 19H16.175L14.175 17H6L9 13L11 15.725L11.85 14.675L5 7.825V19Q5 19 5 19Q5 19 5 19ZM21 18.175 19 16.175V5Q19 5 19 5Q19 5 19 5H7.825L5.825 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM13.475 10.65Q13.475 10.65 13.475 10.65Q13.475 10.65 13.475 10.65ZM10.6 13.425Q10.6 13.425 10.6 13.425Q10.6 13.425 10.6 13.425Z"/>
    </Icon>
  )
});

export default IconMaterialImageNotSupportedOutlined;
