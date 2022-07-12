import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsSharpW700Filled'
      short_name='Sms'

      {...props}
    >
      <path d="M7.6 11.3Q8.15 11.3 8.525 10.925Q8.9 10.55 8.9 10Q8.9 9.45 8.525 9.075Q8.15 8.7 7.6 8.7Q7.05 8.7 6.675 9.075Q6.3 9.45 6.3 10Q6.3 10.55 6.675 10.925Q7.05 11.3 7.6 11.3ZM12 11.3Q12.55 11.3 12.925 10.925Q13.3 10.55 13.3 10Q13.3 9.45 12.925 9.075Q12.55 8.7 12 8.7Q11.45 8.7 11.075 9.075Q10.7 9.45 10.7 10Q10.7 10.55 11.075 10.925Q11.45 11.3 12 11.3ZM16.4 11.3Q16.95 11.3 17.325 10.925Q17.7 10.55 17.7 10Q17.7 9.45 17.325 9.075Q16.95 8.7 16.4 8.7Q15.85 8.7 15.475 9.075Q15.1 9.45 15.1 10Q15.1 10.55 15.475 10.925Q15.85 11.3 16.4 11.3ZM1.15 22.85V1.15H22.85V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialSmsSharpW700Filled;
