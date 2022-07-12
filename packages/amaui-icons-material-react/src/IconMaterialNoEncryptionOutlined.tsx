import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoEncryptionOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionOutlined'
      short_name='NoEncryption'

      {...props}
    >
      <path d="M20 17.15 18 15.15V10Q18 10 18 10Q18 10 18 10H12.85L10.85 8H15V6Q15 4.725 14.125 3.862Q13.25 3 12 3Q10.75 3 9.875 3.862Q9 4.725 9 6V6.15L7.25 4.4Q7.775 2.925 9.062 1.962Q10.35 1 12 1Q14.075 1 15.538 2.438Q17 3.875 17 6V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10ZM20.5 23.3 18.95 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V10Q4 9.35 4.363 8.837Q4.725 8.325 5.3 8.1L0.7 3.5L2.1 2.1L21.9 21.9ZM17.15 20 13.475 16.325Q13.175 16.625 12.8 16.825Q12.425 17.025 11.975 17.025Q11.15 17.025 10.562 16.438Q9.975 15.85 9.975 15.025Q9.975 14.575 10.15 14.188Q10.325 13.8 10.675 13.525L7.15 10H6Q6 10 6 10Q6 10 6 10V20Q6 20 6 20Q6 20 6 20ZM12.15 15Q12.15 15 12.15 15Q12.15 15 12.15 15Q12.15 15 12.15 15Q12.15 15 12.15 15ZM15.425 12.575Q15.425 12.575 15.425 12.575Q15.425 12.575 15.425 12.575Z"/>
    </Icon>
  )
});

export default IconMaterialNoEncryptionOutlined;
