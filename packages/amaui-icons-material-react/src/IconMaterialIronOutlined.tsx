import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronOutlined'
      short_name='Iron'

      {...props}
    >
      <path d="M2 18V15Q2 13.35 3.175 12.175Q4.35 11 6 11H15V10Q15 9.575 14.713 9.287Q14.425 9 14 9H10Q9.575 9 9.288 9.287Q9 9.575 9 10H7Q7 8.75 7.875 7.875Q8.75 7 10 7H14Q15.25 7 16.125 7.875Q17 8.75 17 10V14Q17.425 14 17.712 13.712Q18 13.425 18 13V9Q18 7.75 18.875 6.875Q19.75 6 21 6H22V8H21Q20.575 8 20.288 8.287Q20 8.575 20 9V13Q20 14.25 19.125 15.125Q18.25 16 17 16V18ZM4 16H15V13H6Q5.175 13 4.588 13.587Q4 14.175 4 15ZM15 16V15Q15 14.175 15 13.587Q15 13 15 13V16Z"/>
    </Icon>
  )
});

export default IconMaterialIronOutlined;
