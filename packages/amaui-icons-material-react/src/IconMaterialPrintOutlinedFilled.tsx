import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintOutlinedFilled'
      short_name='Print'

      {...props}
    >
      <path d="M6 7V3H18V7ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM8 19H16V15H8ZM6 21V17H2V11Q2 9.725 2.875 8.863Q3.75 8 5 8H19Q20.275 8 21.138 8.863Q22 9.725 22 11V17H18V21Z"/>
    </Icon>
  )
});

export default IconMaterialPrintOutlinedFilled;
