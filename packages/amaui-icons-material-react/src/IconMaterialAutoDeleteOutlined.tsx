import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteOutlined'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M17 22Q14.95 22 13.475 20.538Q12 19.075 12 17Q12 14.925 13.475 13.462Q14.95 12 17 12Q19.05 12 20.525 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V7H18V10.075Q17.5 10 17 10Q16.5 10 16 10.075V9H8V19Q8 19 8 19Q8 19 8 19H10.3Q10.45 19.55 10.7 20.05Q10.95 20.55 11.275 21ZM18.65 19.35 19.35 18.65 17.5 16.8V14H16.5V17.2ZM8 19Q8 19 8 19Q8 19 8 19Q8 19 8 19Q8 19 8 19Q8 19 8 19Q8 19 8 19ZM5 6V4H8.5L9.5 3H14.5L15.5 4H19V6Z"/>
    </Icon>
  )
});

export default IconMaterialAutoDeleteOutlined;
