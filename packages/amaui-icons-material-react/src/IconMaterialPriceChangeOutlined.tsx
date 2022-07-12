import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceChangeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeOutlined'
      short_name='PriceChange'

      {...props}
    >
      <path d="M8 17H10V16H11Q11.425 16 11.713 15.712Q12 15.425 12 15V12Q12 11.575 11.713 11.287Q11.425 11 11 11H8V10H12V8H10V7H8V8H7Q6.575 8 6.287 8.287Q6 8.575 6 9V12Q6 12.425 6.287 12.712Q6.575 13 7 13H10V14H6V16H8ZM16 16.25 18 14.25H14ZM14 10H18L16 8ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialPriceChangeOutlined;