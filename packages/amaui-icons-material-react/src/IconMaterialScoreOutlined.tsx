import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreOutlined'
      short_name='Score'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM9 12.5 13 16.5 19 10.5V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V16.5ZM12 12V6H13.5V12ZM15.5 12 13.5 9 15.5 6H17.2L15.2 9L17.2 12ZM7 12V8.25H9.5V7.5H7V6H11V9.75H8.5V10.5H11V12ZM9 15 5 19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V13L13 19ZM5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterialScoreOutlined;
