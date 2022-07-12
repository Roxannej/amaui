import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxOutlinedFilled'
      short_name='AllInbox'

      {...props}
    >
      <path d="M14 13Q14.85 13 15.425 12.412Q16 11.825 16 11H20V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V11H12Q12 11.825 12.588 12.412Q13.175 13 14 13ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialAllInboxOutlinedFilled;
