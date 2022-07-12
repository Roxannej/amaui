import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kOutlined'
      short_name='10k'

      {...props}
    >
      <path d="M13.925 15H15.425V12.75L17.175 15H19L16.675 12L19 9H17.175L15.425 11.25V9H13.925ZM6 15H7.5V9H5V10.5H6ZM9.5 15H12Q12.425 15 12.713 14.712Q13 14.425 13 14V10Q13 9.575 12.713 9.287Q12.425 9 12 9H9.5Q9.075 9 8.788 9.287Q8.5 9.575 8.5 10V14Q8.5 14.425 8.788 14.712Q9.075 15 9.5 15ZM10 13.5V10.5H11.5V13.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterial10kOutlined;