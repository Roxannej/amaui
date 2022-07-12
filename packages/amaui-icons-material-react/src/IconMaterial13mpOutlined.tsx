import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial13mpOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='13mpOutlined'
      short_name='13mp'

      {...props}
    >
      <path d="M8.5 11.5H10V5.5H7V7H8.5ZM12 11.5H15.5Q15.925 11.5 16.212 11.212Q16.5 10.925 16.5 10.5V6.5Q16.5 6.075 16.212 5.787Q15.925 5.5 15.5 5.5H12V7H15V8H13V9H15V10H12ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5ZM7 12.5Q6.575 12.5 6.287 12.787Q6 13.075 6 13.5V18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V13.5Q12.5 13.075 12.213 12.787Q11.925 12.5 11.5 12.5ZM13.5 12.5V18.5H15V17H17Q17.425 17 17.712 16.712Q18 16.425 18 16V13.5Q18 13.075 17.712 12.787Q17.425 12.5 17 12.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  )
});

export default IconMaterial13mpOutlined;
