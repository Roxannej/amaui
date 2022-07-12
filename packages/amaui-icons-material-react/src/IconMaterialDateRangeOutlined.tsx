import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDateRangeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DateRangeOutlined'
      short_name='DateRange'

      {...props}
    >
      <path d="M8 14Q7.575 14 7.287 13.712Q7 13.425 7 13Q7 12.575 7.287 12.287Q7.575 12 8 12Q8.425 12 8.713 12.287Q9 12.575 9 13Q9 13.425 8.713 13.712Q8.425 14 8 14ZM12 14Q11.575 14 11.288 13.712Q11 13.425 11 13Q11 12.575 11.288 12.287Q11.575 12 12 12Q12.425 12 12.713 12.287Q13 12.575 13 13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM16 14Q15.575 14 15.288 13.712Q15 13.425 15 13Q15 12.575 15.288 12.287Q15.575 12 16 12Q16.425 12 16.712 12.287Q17 12.575 17 13Q17 13.425 16.712 13.712Q16.425 14 16 14ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialDateRangeOutlined;
