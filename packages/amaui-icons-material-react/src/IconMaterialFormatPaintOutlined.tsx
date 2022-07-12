import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatPaintOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintOutlined'
      short_name='FormatPaint'

      {...props}
    >
      <path d="M11 22Q10.175 22 9.588 21.413Q9 20.825 9 20V16H6Q5.175 16 4.588 15.412Q4 14.825 4 14V7Q4 5.35 5.175 4.175Q6.35 3 8 3H20V14Q20 14.825 19.413 15.412Q18.825 16 18 16H15V20Q15 20.825 14.413 21.413Q13.825 22 13 22ZM6 10H18V5H17V9H15V5H14V7H12V5H8Q7.175 5 6.588 5.588Q6 6.175 6 7ZM6 14H18Q18 14 18 14Q18 14 18 14V12H6V14Q6 14 6 14Q6 14 6 14ZM6 12V14Q6 14 6 14Q6 14 6 14Q6 14 6 14Q6 14 6 14Z"/>
    </Icon>
  )
});

export default IconMaterialFormatPaintOutlined;