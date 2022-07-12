import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusOutlinedW700Filled'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.375 14H17.375V12.5H18.7V11.5H17.375V10H16.375V11.5H14.875V12.5H16.375ZM10.8 15H12.3V12.75L14.05 15H15.8L13.55 12L15.8 9H14.05L12.3 11.25V9H10.8ZM7.8 15H9.3V9H6.3V10.5H7.8ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterial1kPlusOutlinedW700Filled;
