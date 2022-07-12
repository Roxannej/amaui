import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kPlusSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusSharpW700'
      short_name='4kPlus'

      {...props}
    >
      <path d="M16.625 14H17.625V12.5H18.7V11.5H17.625V10H16.625V11.5H15.125V12.5H16.625ZM11.65 15H13.15V12.75L14.9 15H16.675L14.4 12L16.675 9H14.9L13.15 11.25V9H11.65ZM5.8 13.5H8.725V15H10.225V13.5H11.15V12H10.225V9H8.725V12H7.3V9H5.8ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial4kPlusSharpW700;
