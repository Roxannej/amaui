import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCribOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribOutlinedW100Filled'
      short_name='Crib'

      {...props}
    >
      <path d="M12 18.9Q12.7 18.9 13.35 18.8Q14 18.7 14.65 18.5V14.7H9.35V18.5Q10 18.7 10.65 18.8Q11.3 18.9 12 18.9ZM12 19.6Q10.3 19.6 8.725 19Q7.15 18.4 5.875 17.3L6.375 16.8Q6.875 17.25 7.45 17.6Q8.025 17.95 8.65 18.225V14.7H6.8Q6.15 14.7 5.725 14.275Q5.3 13.85 5.3 13.2V8Q5.3 6.875 6.088 6.088Q6.875 5.3 8 5.3H10.95V9.8H17.2Q17.85 9.8 18.275 10.225Q18.7 10.65 18.7 11.3V13.2Q18.7 13.85 18.275 14.275Q17.85 14.7 17.2 14.7H15.35V18.225Q15.975 17.95 16.55 17.6Q17.125 17.25 17.625 16.8L18.125 17.3Q16.85 18.4 15.275 19Q13.7 19.6 12 19.6Z"/>
    </Icon>
  )
});

export default IconMaterialCribOutlinedW100Filled;
