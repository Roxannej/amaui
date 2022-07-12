import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFenceOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceOutlinedW700'
      short_name='Fence'

      {...props}
    >
      <path d="M3.85 21.35V16.95H1.85V13.8H3.85V12.575H1.85V9.425H3.85V6.675L7.625 2.9L9.8 5.125L12.025 2.9L14.225 5.1L16.4 2.9L20.175 6.675V9.425H22.15V12.575H20.175V13.8H22.15V16.95H20.175V21.35ZM7 9.425H8.225V7.975L7.625 7.35L7 7.975ZM11.375 9.425H12.625V7.975L12 7.35L11.375 7.975ZM15.8 9.425H17V7.975L16.375 7.35L15.8 7.975ZM7 13.8H8.225V12.575H7ZM11.375 13.8H12.625V12.575H11.375ZM15.8 13.8H17V12.575H15.8ZM7 18.2H8.225V16.95H7ZM11.375 18.2H12.625V16.95H11.375ZM15.8 18.2H17V16.95H15.8Z"/>
    </Icon>
  )
});

export default IconMaterialFenceOutlinedW700;
