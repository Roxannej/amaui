import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledOutlined'
      short_name='DesktopAccessDisabled'

      {...props}
    >
      <path d="M20.7 17.85 18.85 16H20Q20 16 20 16Q20 16 20 16V5Q20 5 20 5Q20 5 20 5H7.85L5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.625 21.638 17.125Q21.275 17.625 20.7 17.85ZM20.5 23.3 15.15 18H14V20H16V22H8V20H10V18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.85L0.7 3.5L2.1 2.1L21.9 21.9ZM13.15 16 4 6.8V16Q4 16 4 16Q4 16 4 16ZM8.625 11.45Q8.625 11.45 8.625 11.45Q8.625 11.45 8.625 11.45ZM13.375 10.525Q13.375 10.525 13.375 10.525Q13.375 10.525 13.375 10.525Q13.375 10.525 13.375 10.525Q13.375 10.525 13.375 10.525Z"/>
    </Icon>
  )
});

export default IconMaterialDesktopAccessDisabledOutlined;
