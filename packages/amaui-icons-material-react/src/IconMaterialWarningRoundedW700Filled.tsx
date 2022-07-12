import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWarningRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningRoundedW700Filled'
      short_name='Warning'

      {...props}
    >
      <path d="M3 21.425Q2.075 21.425 1.638 20.638Q1.2 19.85 1.65 19.05L10.625 3.525Q11.075 2.725 12 2.725Q12.925 2.725 13.375 3.525L22.35 19.05Q22.8 19.85 22.363 20.638Q21.925 21.425 21 21.425ZM12 10.275Q11.575 10.275 11.288 10.562Q11 10.85 11 11.275V14Q11 14.425 11.288 14.712Q11.575 15 12 15Q12.425 15 12.713 14.712Q13 14.425 13 14V11.275Q13 10.85 12.713 10.562Q12.425 10.275 12 10.275ZM12 17.925Q12.45 17.925 12.788 17.587Q13.125 17.25 13.125 16.8Q13.125 16.35 12.788 16.025Q12.45 15.7 12 15.7Q11.55 15.7 11.213 16.025Q10.875 16.35 10.875 16.8Q10.875 17.25 11.213 17.587Q11.55 17.925 12 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialWarningRoundedW700Filled;
