import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSatelliteOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteOutlined'
      short_name='Satellite'

      {...props}
    >
      <path d="M6 12Q8.5 12 10.25 10.25Q12 8.5 12 6H10.3Q10.3 7.8 9.05 9.05Q7.8 10.3 6 10.3ZM6 8.6Q7.075 8.6 7.812 7.837Q8.55 7.075 8.55 6H6ZM6 17H18L14.25 12L11.25 16L9 13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterialSatelliteOutlined;