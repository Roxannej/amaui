import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipRoundedW700Filled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M9.625 22.025Q8.825 22.425 8.088 21.95Q7.35 21.475 7.35 20.6V17.85H4.3Q3 17.85 2.075 16.925Q1.15 16 1.15 14.7V4.3Q1.15 3 2.075 2.075Q3 1.15 4.3 1.15H19.7Q21 1.15 21.925 2.075Q22.85 3 22.85 4.3V14.7Q22.85 16 21.925 16.925Q21 17.85 19.7 17.85H16.65V20.6Q16.65 21.475 15.913 21.95Q15.175 22.425 14.375 22.025L12 20.85ZM4.3 13.075H19.7V9.3H4.3Z"/>
    </Icon>
  )
});

export default IconMaterialCardMembershipRoundedW700Filled;
