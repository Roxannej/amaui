import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWidgetsOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsOutlinedW700'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.925 13.775 10.225 7.075 16.925 0.4 23.6 7.075ZM0.775 11.775V2.3H10.225V11.775ZM12.225 23.225V13.775H21.7V23.225ZM0.775 23.225V13.775H10.225V23.225ZM3.925 8.625H7.075V5.45H3.925ZM16.925 9.325 19.15 7.1 16.925 4.85 14.7 7.1ZM15.375 20.075H18.55V16.925H15.375ZM3.925 20.075H7.075V16.925H3.925ZM7.075 8.625ZM14.7 7.075ZM7.075 16.925ZM15.375 16.925Z"/>
    </Icon>
  )
});

export default IconMaterialWidgetsOutlinedW700;