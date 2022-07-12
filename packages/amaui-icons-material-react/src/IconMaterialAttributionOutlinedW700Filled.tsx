import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttributionOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionOutlinedW700Filled'
      short_name='Attribution'

      {...props}
    >
      <path d="M10.825 18.7H13.175V14.375H14.625V9.975Q14.625 9.325 13.95 8.987Q13.275 8.65 12 8.65Q10.725 8.65 10.05 8.987Q9.375 9.325 9.375 9.975V14.375H10.825ZM12 22.85Q9.775 22.85 7.8 21.988Q5.825 21.125 4.35 19.65Q2.875 18.175 2.013 16.2Q1.15 14.225 1.15 12Q1.15 9.775 2.013 7.8Q2.875 5.825 4.35 4.35Q5.825 2.875 7.8 2.012Q9.775 1.15 12 1.15Q14.225 1.15 16.2 2.012Q18.175 2.875 19.65 4.35Q21.125 5.825 21.988 7.8Q22.85 9.775 22.85 12Q22.85 14.225 21.988 16.2Q21.125 18.175 19.65 19.65Q18.175 21.125 16.2 21.988Q14.225 22.85 12 22.85ZM12 8.15Q12.575 8.15 13 7.725Q13.425 7.3 13.425 6.725Q13.425 6.15 13 5.725Q12.575 5.3 12 5.3Q11.425 5.3 11 5.725Q10.575 6.15 10.575 6.725Q10.575 7.3 11 7.725Q11.425 8.15 12 8.15Z"/>
    </Icon>
  )
});

export default IconMaterialAttributionOutlinedW700Filled;
