import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOutlinedW700Filled'
      short_name='Mic'

      {...props}
    >
      <path d="M12 15.15Q10.35 15.15 9.2 14Q8.05 12.85 8.05 11.2V5.375Q8.05 3.725 9.2 2.575Q10.35 1.425 12 1.425Q13.65 1.425 14.8 2.575Q15.95 3.725 15.95 5.375V11.2Q15.95 12.85 14.8 14Q13.65 15.15 12 15.15ZM10.625 22.525V19.35Q7.6 18.95 5.65 16.625Q3.7 14.3 3.7 11.2H6.475Q6.475 13.5 8.088 15.113Q9.7 16.725 12 16.725Q14.3 16.725 15.913 15.113Q17.525 13.5 17.525 11.2H20.3Q20.3 14.3 18.35 16.625Q16.4 18.95 13.375 19.35V22.525Z"/>
    </Icon>
  )
});

export default IconMaterialMicOutlinedW700Filled;
