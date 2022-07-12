import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopOutlinedW700Filled'
      short_name='Shop'

      {...props}
    >
      <path d="M4.3 21.925Q2.975 21.925 2.062 21.013Q1.15 20.1 1.15 18.775V5.225H7.225V3.625Q7.225 2.3 8.138 1.387Q9.05 0.475 10.375 0.475H13.625Q14.95 0.475 15.863 1.387Q16.775 2.3 16.775 3.625V5.225H22.85V18.775Q22.85 20.1 21.938 21.013Q21.025 21.925 19.7 21.925ZM10.375 5.225H13.625V3.625Q13.625 3.625 13.625 3.625Q13.625 3.625 13.625 3.625H10.375Q10.375 3.625 10.375 3.625Q10.375 3.625 10.375 3.625ZM9.5 18.075 16.5 13.575 9.5 9.075Z"/>
    </Icon>
  )
});

export default IconMaterialShopOutlinedW700Filled;
