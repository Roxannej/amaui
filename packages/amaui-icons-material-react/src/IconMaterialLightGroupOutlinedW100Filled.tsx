import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupOutlinedW100Filled'
      short_name='LightGroup'

      {...props}
    >
      <path d="M3.65 20.7V20h6.7v.7ZM17 19.75q-.575 0-.987-.425-.413-.425-.413-1h-2.5q-.3 0-.525-.175-.225-.175-.225-.45.05-1.55 1.338-2.575 1.287-1.025 2.962-1.15v-9.4h.7v9.4q1.7.125 2.987 1.15 1.288 1.025 1.338 2.575 0 .275-.225.45t-.525.175h-2.5q0 .575-.412 1-.413.425-1.013.425Zm-10.35-1.4V11H3.375q-.375 0-.6-.3-.225-.3-.125-.65l1.3-4.9q.05-.25.25-.4.2-.15.475-.15H9.35q.275 0 .475.15.2.15.25.4l1.3 4.9q.1.35-.125.65-.225.3-.6.3h-3.3v7.35Z"/>
    </Icon>
  )
});

export default IconMaterialLightGroupOutlinedW100Filled;
