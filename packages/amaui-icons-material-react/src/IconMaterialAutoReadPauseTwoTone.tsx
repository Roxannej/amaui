import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseTwoTone'
      short_name='AutoReadPause'

      {...props}
    >
      <path d="M8.75 14.1H11V5.9H8.75ZM13.025 14.1H15.275V5.9H13.025ZM1.4 22.475V4.4Q1.4 3.125 2.275 2.25Q3.15 1.375 4.425 1.375H19.575Q20.85 1.375 21.725 2.25Q22.6 3.125 22.6 4.4V15.6Q22.6 16.875 21.725 17.75Q20.85 18.625 19.575 18.625H5.25Z"/>
    </Icon>
  )
});

export default IconMaterialAutoReadPauseTwoTone;