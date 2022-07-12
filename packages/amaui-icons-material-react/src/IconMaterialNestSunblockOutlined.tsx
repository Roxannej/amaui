import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestSunblockOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockOutlined'
      short_name='NestSunblock'

      {...props}
    >
      <path d="M2 7V4h2v3Zm0 13v-3h2v3ZM7.25 9.175 5.825 7.75 7.95 5.625 9.375 7.05Zm.7 9.2L5.825 16.25l1.425-1.425 2.125 2.125ZM8 13v-2h6l-1.8-2.4 1.6-1.2 3 4q.375.5.1 1.05T16 13Zm12.5 6q-.625 0-1.062-.438Q19 18.125 19 17.5v-11q0-.625.438-1.062Q19.875 5 20.5 5t1.062.438Q22 5.875 22 6.5v11q0 .625-.438 1.062Q21.125 19 20.5 19ZM2 16v-2q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V8q1.65 0 2.825 1.175Q6 10.35 6 12q0 1.65-1.175 2.825Q3.65 16 2 16Z"/>
    </Icon>
  )
});

export default IconMaterialNestSunblockOutlined;
