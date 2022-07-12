import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRoundedW700Filled'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M10.925 14.7 8.325 12.1Q7.575 11.35 7.988 10.387Q8.4 9.425 9.45 9.425H14.6Q15.65 9.425 16.062 10.387Q16.475 11.35 15.725 12.1L13.125 14.7Q12.9 14.925 12.613 15.037Q12.325 15.15 12.025 15.15Q11.725 15.15 11.438 15.037Q11.15 14.925 10.925 14.7Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropDownRoundedW700Filled;