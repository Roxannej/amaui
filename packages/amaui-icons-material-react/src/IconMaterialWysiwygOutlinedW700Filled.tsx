import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygOutlinedW700Filled'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M5.375 21.775Q4.075 21.775 3.15 20.85Q2.225 19.925 2.225 18.625V5.375Q2.225 4.075 3.15 3.15Q4.075 2.225 5.375 2.225H18.625Q19.925 2.225 20.85 3.15Q21.775 4.075 21.775 5.375V18.625Q21.775 19.925 20.85 20.85Q19.925 21.775 18.625 21.775ZM5 19H19Q19 19 19 19Q19 19 19 19V7H5V19Q5 19 5 19Q5 19 5 19ZM7 12V10H17V12ZM7 16V14H13V16Z"/>
    </Icon>
  )
});

export default IconMaterialWysiwygOutlinedW700Filled;
