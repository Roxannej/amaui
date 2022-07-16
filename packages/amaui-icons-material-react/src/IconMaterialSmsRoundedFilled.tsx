import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsRoundedFilled'
      short_name='Sms'

      {...props}
    >
      <path d="M8 11Q8.425 11 8.713 10.712Q9 10.425 9 10Q9 9.575 8.713 9.287Q8.425 9 8 9Q7.575 9 7.287 9.287Q7 9.575 7 10Q7 10.425 7.287 10.712Q7.575 11 8 11ZM12 11Q12.425 11 12.713 10.712Q13 10.425 13 10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10Q11 10.425 11.288 10.712Q11.575 11 12 11ZM16 11Q16.425 11 16.712 10.712Q17 10.425 17 10Q17 9.575 16.712 9.287Q16.425 9 16 9Q15.575 9 15.288 9.287Q15 9.575 15 10Q15 10.425 15.288 10.712Q15.575 11 16 11ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

export default IconMaterialSmsRoundedFilled;