import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial18UpRatingOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingOutlined'
      short_name='18UpRating'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5ZM8.5 15H10V9H7V10.5H8.5ZM12.5 15H15Q15.425 15 15.713 14.712Q16 14.425 16 14V10Q16 9.575 15.713 9.287Q15.425 9 15 9H12.5Q12.075 9 11.788 9.287Q11.5 9.575 11.5 10V14Q11.5 14.425 11.788 14.712Q12.075 15 12.5 15ZM13 11.5V10H14.5V11.5ZM13 14V12.5H14.5V14Z"/>
    </Icon>
  )
});

export default IconMaterial18UpRatingOutlined;
