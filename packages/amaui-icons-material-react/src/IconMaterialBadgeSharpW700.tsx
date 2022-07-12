import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBadgeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeSharpW700'
      short_name='Badge'

      {...props}
    >
      <path d="M14 13.8H18V12.3H14ZM14 16.8H18V15.3H14ZM15.85 6.15H22.85V22.85H1.15V6.15H8.15V1.15H15.85ZM11.3 8.15H12.7V4.3H11.3ZM12 14.5ZM9 15.3Q9.625 15.3 10.062 14.862Q10.5 14.425 10.5 13.8Q10.5 13.175 10.062 12.737Q9.625 12.3 9 12.3Q8.375 12.3 7.938 12.737Q7.5 13.175 7.5 13.8Q7.5 14.425 7.938 14.862Q8.375 15.3 9 15.3ZM6 18.3H12V17.85Q12 17.425 11.762 17.062Q11.525 16.7 11.1 16.5Q10.6 16.275 10.088 16.163Q9.575 16.05 9 16.05Q8.425 16.05 7.913 16.163Q7.4 16.275 6.9 16.5Q6.475 16.7 6.238 17.062Q6 17.425 6 17.85ZM8.15 9.3H4.3V19.7H19.7V9.3H15.85V11.3H8.15Z"/>
    </Icon>
  )
});

export default IconMaterialBadgeSharpW700;
