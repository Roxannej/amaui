import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOutlined'
      short_name='ThumbDown'

      {...props}
    >
      <path d="M9.825 23 8.775 21.95Q8.575 21.75 8.438 21.462Q8.3 21.175 8.325 20.9L8.35 20.575L9.3 16H3Q2.175 16 1.588 15.412Q1 14.825 1 14V12Q1 11.825 1.038 11.637Q1.075 11.45 1.15 11.275L4.15 4.225Q4.375 3.675 4.875 3.337Q5.375 3 6 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V15Q17 15.4 16.85 15.762Q16.7 16.125 16.425 16.4ZM10.65 19.35 15 15V5Q15 5 15 5Q15 5 15 5H6Q6 5 6 5Q6 5 6 5L3 12V14Q3 14 3 14Q3 14 3 14H12ZM19 15H23V3H19ZM15 14Q15 14 15 14Q15 14 15 14V12V5Q15 5 15 5Q15 5 15 5Q15 5 15 5Q15 5 15 5V15Z"/>
    </Icon>
  )
});

export default IconMaterialThumbDownOutlined;
