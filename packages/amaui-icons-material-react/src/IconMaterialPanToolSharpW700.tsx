import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolSharpW700'
      short_name='PanTool'

      {...props}
    >
      <path d="M8.725 24H22.775V3.65H19.375V0.9H15.55V0H10.625V2.3H7.225V13.2L4.05 11.65L0.225 15.15ZM9.9 21.225 4.2 15.3 4.525 14.95 10 17.65V5.075H11V12.775H13V2.775H14V12.775H16V3.675H17V12.775H19V6.425H20V21.225Z"/>
    </Icon>
  )
});

export default IconMaterialPanToolSharpW700;