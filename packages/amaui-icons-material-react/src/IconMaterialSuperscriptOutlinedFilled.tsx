import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSuperscriptOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptOutlinedFilled'
      short_name='Superscript'

      {...props}
    >
      <path d="M19 9V7Q19 6.575 19.288 6.287Q19.575 6 20 6H22V5H19V4H22Q22.425 4 22.712 4.287Q23 4.575 23 5V6Q23 6.425 22.712 6.713Q22.425 7 22 7H20V8H23V9ZM5.875 20 10.5 12.725 6.2 6H8.85L11.95 11H12.05L15.125 6H17.8L13.475 12.725L18.125 20H15.45L12.05 14.575H11.95L8.55 20Z"/>
    </Icon>
  )
});

export default IconMaterialSuperscriptOutlinedFilled;
