import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlenderSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderSharpW700'
      short_name='Blender'

      {...props}
    >
      <path d="M5.225 22.775V16.65L7.05 14.85L6.475 11.15H1.475V2.225H9.225V1.225H14.775V2.225H18.875L16.95 14.85L18.775 16.65V22.775ZM4.225 8.375H6.075L5.525 5H4.225ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18Q11 18.425 11.288 18.712Q11.575 19 12 19ZM9.575 13.225H14.425L15.65 5H8.35ZM8 20H16V17.775L14.225 16H9.775L8 17.775ZM12 16Z"/>
    </Icon>
  )
});

export default IconMaterialBlenderSharpW700;
