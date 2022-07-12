import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseOutlined'
      short_name='AutoReadPause'

      {...props}
    >
      <path d="M9 14H11V6H9ZM13 14H15V6H13ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6ZM4 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V16ZM4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16Z"/>
    </Icon>
  )
});

export default IconMaterialAutoReadPauseOutlined;
