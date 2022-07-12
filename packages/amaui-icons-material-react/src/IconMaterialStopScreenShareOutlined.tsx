import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopScreenShareOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareOutlined'
      short_name='StopScreenShare'

      {...props}
    >
      <path d="M14.425 11.575 11.85 9H13V7L16 10ZM20.7 17.85 18.85 16H20Q20 16 20 16Q20 16 20 16V5Q20 5 20 5Q20 5 20 5H7.85L5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.65 21.638 17.137Q21.275 17.625 20.7 17.85ZM20.5 23.3 18.2 21H1V19H16.175L15.175 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.85Q2 4.85 2 4.85Q2 4.85 2 4.85L0.7 3.5L2.1 2.1L21.9 21.9ZM10 12.85Q10 12.85 10 12.85Q10 12.85 10 12.85V14H8V12Q8 11.725 8.025 11.475Q8.05 11.225 8.175 11L4 6.825Q4 6.825 4 6.825Q4 6.825 4 6.825V16Q4 16 4 16Q4 16 4 16H13.15ZM12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Z"/>
    </Icon>
  )
});

export default IconMaterialStopScreenShareOutlined;
