import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnowmobileOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileOutlined'
      short_name='Snowmobile'

      {...props}
    >
      <path d="M8 20H2Q1.05 20 0.525 19.375Q0 18.75 0 18Q0 17.5 0.25 17.025Q0.5 16.55 1.05 16.25L4.55 14.35L0 13L2 9L11 10L14.05 7.725L13.25 7H11V5H14.05L21.175 11.625Q21.65 12.05 21.825 12.462Q22 12.875 22 13.25Q22 14.325 21.175 15.162Q20.35 16 18.675 16L20.825 18H21Q21.425 18 21.712 17.712Q22 17.425 22 17H24Q24 18.25 23.125 19.125Q22.25 20 21 20H15V18H17.925L15.925 16H12Q12 17.65 10.825 18.825Q9.65 20 8 20ZM2 18H8Q8.825 18 9.413 17.413Q10 16.825 10 16L7.25 15.175L2 18Q2 18 2 18Q2 18 2 18Q2 18 2 18Q2 18 2 18ZM10.3 14H18.575Q19.25 14 19.625 13.837Q20 13.675 20 13.25L15.525 9.1L11.575 12.075L3.15 11.15L2.85 11.75ZM11.425 11.55Q11.425 11.55 11.425 11.55Q11.425 11.55 11.425 11.55Z"/>
    </Icon>
  )
});

export default IconMaterialSnowmobileOutlined;
