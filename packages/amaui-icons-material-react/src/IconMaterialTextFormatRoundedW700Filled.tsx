import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFormatRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatRoundedW700Filled'
      short_name='TextFormat'

      {...props}
    >
      <path d="M6 19.375Q5.35 19.375 4.888 18.913Q4.425 18.45 4.425 17.8Q4.425 17.15 4.888 16.688Q5.35 16.225 6 16.225H18Q18.65 16.225 19.113 16.688Q19.575 17.15 19.575 17.8Q19.575 18.45 19.113 18.913Q18.65 19.375 18 19.375ZM10.875 10.15H13.175L12.075 6.7H11.975ZM8.55 14.625Q7.725 14.625 7.363 14.087Q7 13.55 7.275 12.775L10.2 4.9Q10.4 4.375 10.95 4Q11.5 3.625 12.075 3.625Q12.65 3.625 13.188 4Q13.725 4.375 13.925 4.9L16.825 12.675Q17.125 13.475 16.7 14.05Q16.275 14.625 15.4 14.625Q14.975 14.625 14.613 14.337Q14.25 14.05 14.125 13.675L13.675 12.275H10.3L9.8 13.75Q9.675 14.125 9.325 14.375Q8.975 14.625 8.55 14.625Z"/>
    </Icon>
  )
});

export default IconMaterialTextFormatRoundedW700Filled;
