import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial16mpSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpSharpW700'
      short_name='16mp'

      {...props}
    >
      <path d="M8.5 11.8H10V5.8H7V7.3H8.5ZM13 11.8H15.5Q15.925 11.8 16.212 11.512Q16.5 11.225 16.5 10.8V9.3Q16.5 8.875 16.212 8.587Q15.925 8.3 15.5 8.3H13.5V7.3H16.5V5.8H13Q12.575 5.8 12.288 6.088Q12 6.375 12 6.8V10.8Q12 11.225 12.288 11.512Q12.575 11.8 13 11.8ZM13.5 10.8V9.3H15V10.8ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM6 18.2H7.5V14H8.5V16.875H10V14H11V18.2H12.5V12.5H6ZM13.5 18.2H15V16.85H18V12.5H13.5ZM15 14H16.5V15.35H15ZM5.3 5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial16mpSharpW700;
