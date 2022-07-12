import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoEncryptionOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionOutlinedFilled'
      short_name='NoEncryption'

      {...props}
    >
      <path d="M20.5 23.3 18.95 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V10Q4 9.35 4.363 8.837Q4.725 8.325 5.3 8.1L0.7 3.5L2.1 2.1L21.9 21.9ZM20 17.15 10.85 8H15V6Q15 4.725 14.125 3.862Q13.25 3 12 3Q10.75 3 9.875 3.862Q9 4.725 9 6V6.15L7.25 4.4Q7.775 2.925 9.062 1.962Q10.35 1 12 1Q14.075 1 15.538 2.438Q17 3.875 17 6V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10ZM11.975 17.025Q12.425 17.025 12.8 16.825Q13.175 16.625 13.475 16.325L10.675 13.525Q10.325 13.8 10.15 14.188Q9.975 14.575 9.975 15.025Q9.975 15.85 10.562 16.438Q11.15 17.025 11.975 17.025Z"/>
    </Icon>
  )
});

export default IconMaterialNoEncryptionOutlinedFilled;
