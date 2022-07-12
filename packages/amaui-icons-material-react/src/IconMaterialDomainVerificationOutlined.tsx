import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationOutlined'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18H20Q20 18 20 18Q20 18 20 18V8H4V18Q4 18 4 18Q4 18 4 18ZM10.95 16.55 7.4 13 8.85 11.55 10.95 13.65 15.15 9.45 16.6 10.9ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialDomainVerificationOutlined;