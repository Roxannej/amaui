import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOffSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffSharpW700Filled'
      short_name='GridOff'

      {...props}
    >
      <path d="M22.8 19.45 20.275 16.925V16.65H20L16.875 13.5H19.65V10.5H16.675V13.3L14.125 10.775V10.5H13.875L10.725 7.35H13.5V4.35H10.525V7.15L8 4.625V4.35H7.725L4.575 1.2H22.8ZM16.65 7.35H19.65V4.35H16.65ZM20.5 23.825 19.45 22.8H1.2V4.525L0.175 3.5L1.825 1.825L22.175 22.175ZM16.65 19.65H16.925L16.65 19.375ZM10.5 13.5H10.775L10.5 13.225ZM10.5 19.65H13.5V16.85L13.3 16.65H10.5ZM4.35 7.35H4.625L4.35 7.075ZM4.35 13.5H7.35V10.675L7.15 10.5H4.35ZM4.35 19.65H7.35V16.65H4.35Z"/>
    </Icon>
  )
});

export default IconMaterialGridOffSharpW700Filled;
