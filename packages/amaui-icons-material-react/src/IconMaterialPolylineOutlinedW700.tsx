import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineOutlinedW700'
      short_name='Polyline'

      {...props}
    >
      <path d="M14.625 22.775V19.725L8.3 16.575H1.85V9.05H7.675L9.625 6.775V0.85H17.15V8.375H11.875L9.375 11.3V14.025L14.625 16.625V15.225H22.15V22.775ZM12.375 5.625H14.375V3.625H12.375ZM4.625 13.8H6.625V11.8H4.625ZM17.375 20H19.375V18H17.375ZM13.375 4.625ZM5.625 12.8ZM18.375 19Z"/>
    </Icon>
  )
});

export default IconMaterialPolylineOutlinedW700;
