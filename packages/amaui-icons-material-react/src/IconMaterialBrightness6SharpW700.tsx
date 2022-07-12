import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness6SharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6SharpW700'
      short_name='Brightness6'

      {...props}
    >
      <path d="M12 23.675 8.525 20.275H3.725V15.475L0.325 12L3.725 8.525V3.7H8.525L12 0.275L15.475 3.7H20.3V8.525L23.725 12L20.3 15.475V20.275H15.475ZM12.025 11.975ZM12 16.425Q13.85 16.425 15.138 15.137Q16.425 13.85 16.425 12Q16.425 10.15 15.138 8.862Q13.85 7.575 12 7.575ZM12 19.275 14.15 17.125H17.15V14.15L19.3 12L17.15 9.85V6.85H14.15L12 4.7L9.85 6.85H6.875V9.85L4.725 12L6.875 14.15V17.125H9.85Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness6SharpW700;
