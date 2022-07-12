import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kPlusSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusSharpW700Filled'
      short_name='2kPlus'

      {...props}
    >
      <path d="M16.625 14H17.625V12.5H18.7V11.5H17.625V10H16.625V11.5H15.125V12.5H16.625ZM11.15 15H12.65V12.75L14.4 15H16.15L13.9 12L16.15 9H14.4L12.65 11.25V9H11.15ZM6.225 15H10.225V13.5H7.725V12.5H10.225V9H6.225V10.5H8.725V11.5H6.225ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterial2kPlusSharpW700Filled;
