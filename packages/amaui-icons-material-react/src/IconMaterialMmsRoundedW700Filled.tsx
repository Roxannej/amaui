import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsRoundedW700Filled'
      short_name='Mms'

      {...props}
    >
      <path d="M7 14.225H17Q17.5 14.225 17.725 13.775Q17.95 13.325 17.65 12.925L14.9 9.275Q14.65 8.95 14.25 8.95Q13.85 8.95 13.6 9.275L11.25 12.425L9.65 10.275Q9.4 9.95 9 9.95Q8.6 9.95 8.35 10.275L6.35 12.925Q6.05 13.325 6.275 13.775Q6.5 14.225 7 14.225ZM1.15 19.05V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15L3.825 20.175Q3.075 20.925 2.113 20.513Q1.15 20.1 1.15 19.05Z"/>
    </Icon>
  )
});

export default IconMaterialMmsRoundedW700Filled;
