import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesOutlined'
      short_name='Headphones'

      {...props}
    >
      <path d="M9 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V12Q3 10.125 3.712 8.487Q4.425 6.85 5.638 5.637Q6.85 4.425 8.488 3.712Q10.125 3 12 3Q13.875 3 15.513 3.712Q17.15 4.425 18.363 5.637Q19.575 6.85 20.288 8.487Q21 10.125 21 12V19Q21 19.825 20.413 20.413Q19.825 21 19 21H15V13H19V12Q19 9.075 16.962 7.037Q14.925 5 12 5Q9.075 5 7.038 7.037Q5 9.075 5 12V13H9ZM7 15H5V19Q5 19 5 19Q5 19 5 19H7ZM17 15V19H19Q19 19 19 19Q19 19 19 19V15ZM17 15H19Q19 15 19 15Q19 15 19 15H17ZM7 15H5Q5 15 5 15Q5 15 5 15Z"/>
    </Icon>
  )
});

export default IconMaterialHeadphonesOutlined;