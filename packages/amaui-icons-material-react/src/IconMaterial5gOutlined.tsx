import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5gOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gOutlined'
      short_name='5g'

      {...props}
    >
      <path d="M3 17V15H8Q8 15 8 15Q8 15 8 15V13Q8 13 8 13Q8 13 8 13H3V7H10V9H5V11H8Q8.825 11 9.413 11.587Q10 12.175 10 13V15Q10 15.825 9.413 16.413Q8.825 17 8 17ZM21 11V15Q21 15.825 20.413 16.413Q19.825 17 19 17H14Q13.175 17 12.588 16.413Q12 15.825 12 15V9Q12 8.175 12.588 7.587Q13.175 7 14 7H19Q19.825 7 20.413 7.587Q21 8.175 21 9H14Q14 9 14 9Q14 9 14 9V15Q14 15 14 15Q14 15 14 15H19Q19 15 19 15Q19 15 19 15V13H16.5V11Z"/>
    </Icon>
  )
});

export default IconMaterial5gOutlined;
