import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachEmailOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailOutlined'
      short_name='AttachEmail'

      {...props}
    >
      <path d="M11 11 3 6V16Q3 16 3 16Q3 16 3 16H13V18H3Q2.175 18 1.588 17.413Q1 16.825 1 16V4Q1 3.175 1.588 2.587Q2.175 2 3 2H19Q19.825 2 20.413 2.587Q21 3.175 21 4V9H19V6ZM11 9 19 4H3ZM19 22Q17.35 22 16.175 20.825Q15 19.65 15 18V13.5Q15 12.45 15.725 11.725Q16.45 11 17.5 11Q18.55 11 19.275 11.725Q20 12.45 20 13.5V18H18V13.5Q18 13.3 17.85 13.15Q17.7 13 17.5 13Q17.3 13 17.15 13.15Q17 13.3 17 13.5V18Q17 18.825 17.587 19.413Q18.175 20 19 20Q19.825 20 20.413 19.413Q21 18.825 21 18V14H23V18Q23 19.65 21.825 20.825Q20.65 22 19 22ZM3 6V4V6V16Q3 16 3 16Q3 16 3 16V13.5Q3 12.05 3 11.025Q3 10 3 10Z"/>
    </Icon>
  )
});

export default IconMaterialAttachEmailOutlined;