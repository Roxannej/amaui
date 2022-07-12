import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledOutlinedFilled'
      short_name='PhoneDisabled'

      {...props}
    >
      <path d="M17.05 14.3 15.65 12.9Q15.925 12.6 16.4 11.863Q16.875 11.125 17 10.9L14.55 8.4Q14.35 8.2 14.275 7.962Q14.2 7.725 14.25 7.5L14.95 3.8Q15.025 3.45 15.288 3.225Q15.55 3 15.9 3H20Q20.45 3 20.725 3.3Q21 3.6 21 4.05Q21 6.8 19.95 9.412Q18.9 12.025 17.05 14.3ZM3.95 21Q3.35 21 3.175 20.725Q3 20.45 3 20V15.9Q3 15.55 3.225 15.287Q3.45 15.025 3.8 14.95L7.45 14.2Q7.725 14.15 7.963 14.225Q8.2 14.3 8.4 14.5L10.9 17Q11.4 16.7 11.875 16.387Q12.35 16.075 12.8 15.7L1.4 4.3L2.8 2.9L21.2 21.3L19.8 22.7L14.25 17.15Q12.025 18.95 9.363 19.975Q6.7 21 3.95 21Z"/>
    </Icon>
  )
});

export default IconMaterialPhoneDisabledOutlinedFilled;
