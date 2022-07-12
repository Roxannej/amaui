import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRoundedW700'
      short_name='Home'

      {...props}
    >
      <path d="M6.3 18.7H8.425V12.425H15.575V18.7H17.7V10.15L12 5.875L6.3 10.15ZM6.3 21.85Q5 21.85 4.075 20.925Q3.15 20 3.15 18.7V10.15Q3.15 9.4 3.5 8.725Q3.85 8.05 4.425 7.625L10.1 3.375Q10.525 3.05 11.012 2.887Q11.5 2.725 12 2.725Q12.5 2.725 12.988 2.887Q13.475 3.05 13.9 3.375L19.575 7.625Q20.175 8.05 20.513 8.725Q20.85 9.4 20.85 10.15V18.7Q20.85 20 19.925 20.925Q19 21.85 17.7 21.85H12.8V15.2H11.2V21.85ZM12 12.3Z"/>
    </Icon>
  )
});

export default IconMaterialHomeRoundedW700;
