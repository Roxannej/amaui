import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageOutlinedW700Filled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M6.275 11.675 2.15 7.575V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V11.95L17.775 7.875L13.925 11.725L10.075 7.875ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V12.05L6.25 16.15L10.075 12.325L13.925 16.175L17.725 12.35L21.85 16.475V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageOutlinedW700Filled;
