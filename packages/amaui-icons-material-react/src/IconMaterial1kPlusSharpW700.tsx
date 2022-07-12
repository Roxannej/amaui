import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusSharpW700'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.375 14H17.375V12.5H18.7V11.5H17.375V10H16.375V11.5H14.875V12.5H16.375ZM10.8 15H12.3V12.75L14.05 15H15.825L13.55 12L15.825 9H14.05L12.3 11.25V9H10.8ZM7.8 15H9.3V9H6.3V10.5H7.8ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial1kPlusSharpW700;