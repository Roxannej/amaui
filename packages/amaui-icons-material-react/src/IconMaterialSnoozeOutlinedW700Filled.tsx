import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnoozeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeOutlinedW700Filled'
      short_name='Snooze'

      {...props}
    >
      <path d="M9.125 16.3H14.875V14.025H12.55L14.875 11.425V9.525H9.125V11.8H11.5L9.125 14.475ZM12 22.85Q9.975 22.85 8.175 22.075Q6.375 21.3 5.037 19.962Q3.7 18.625 2.925 16.825Q2.15 15.025 2.15 13Q2.15 10.975 2.925 9.175Q3.7 7.375 5.037 6.037Q6.375 4.7 8.175 3.925Q9.975 3.15 12 3.15Q14.025 3.15 15.825 3.925Q17.625 4.7 18.962 6.037Q20.3 7.375 21.075 9.175Q21.85 10.975 21.85 13Q21.85 15.025 21.075 16.825Q20.3 18.625 18.962 19.962Q17.625 21.3 15.825 22.075Q14.025 22.85 12 22.85ZM5.225 1.3 6.925 2.975 1.975 7.925 0.3 6.225ZM18.775 1.3 23.7 6.225 22.025 7.925 17.075 2.975Z"/>
    </Icon>
  )
});

export default IconMaterialSnoozeOutlinedW700Filled;
