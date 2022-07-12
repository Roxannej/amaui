import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationOutlinedFilled'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 8H20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6ZM10.95 16.55 16.6 10.9 15.15 9.45 10.95 13.65 8.85 11.55 7.4 13Z"/>
    </Icon>
  )
});

export default IconMaterialDomainVerificationOutlinedFilled;
