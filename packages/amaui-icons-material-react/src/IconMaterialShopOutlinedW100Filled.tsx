import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopOutlinedW100Filled'
      short_name='Shop'

      {...props}
    >
      <path d="M4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.3H9.3V6.1Q9.3 5.45 9.725 5.025Q10.15 4.6 10.8 4.6H13.2Q13.85 4.6 14.275 5.025Q14.7 5.45 14.7 6.1V7.3H20.7V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM10 7.3H14V6.1Q14 5.8 13.75 5.55Q13.5 5.3 13.2 5.3H10.8Q10.5 5.3 10.25 5.55Q10 5.8 10 6.1ZM10.15 16.8 15.3 13.5 10.15 10.2Z"/>
    </Icon>
  )
});

export default IconMaterialShopOutlinedW100Filled;
