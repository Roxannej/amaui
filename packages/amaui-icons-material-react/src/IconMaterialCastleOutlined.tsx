import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleOutlined'
      short_name='Castle'

      {...props}
    >
      <path d="M1 21V9H3V11H5V3H7V5H9V3H11V5H13V3H15V5H17V3H19V11H21V9H23V21H14V18Q14 17.175 13.413 16.587Q12.825 16 12 16Q11.175 16 10.588 16.587Q10 17.175 10 18V21ZM3 19H8V18Q8 16.35 9.175 15.175Q10.35 14 12 14Q13.65 14 14.825 15.175Q16 16.35 16 18V19H21V13H17V7H7V13H3ZM9 12H11V9H9ZM13 12H15V9H13ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  )
});

export default IconMaterialCastleOutlined;