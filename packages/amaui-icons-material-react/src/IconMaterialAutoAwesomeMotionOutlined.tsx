import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionOutlined'
      short_name='AutoAwesomeMotion'

      {...props}
    >
      <path d="M2 14V4Q2 3.175 2.588 2.587Q3.175 2 4 2H14V4H4Q4 4 4 4Q4 4 4 4V14ZM6 18V8Q6 7.175 6.588 6.588Q7.175 6 8 6H18V8H8Q8 8 8 8Q8 8 8 8V18ZM20 22H12Q11.175 22 10.588 21.413Q10 20.825 10 20V12Q10 11.175 10.588 10.587Q11.175 10 12 10H20Q20.825 10 21.413 10.587Q22 11.175 22 12V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM20 20Q20 20 20 20Q20 20 20 20V12Q20 12 20 12Q20 12 20 12H12Q12 12 12 12Q12 12 12 12V20Q12 20 12 20Q12 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12V20Q12 20 12 20Q12 20 12 20Q12 20 12 20Q12 20 12 20V12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialAutoAwesomeMotionOutlined;
