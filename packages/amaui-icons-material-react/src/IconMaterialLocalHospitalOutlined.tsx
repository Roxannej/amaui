import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalHospitalOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalOutlined'
      short_name='LocalHospital'

      {...props}
    >
      <path d="M10.5 17H13.5V13.5H17V10.5H13.5V7H10.5V10.5H7V13.5H10.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialLocalHospitalOutlined;