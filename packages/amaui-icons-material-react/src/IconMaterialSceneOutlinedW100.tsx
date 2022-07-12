import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSceneOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SceneOutlinedW100'
      short_name='Scene'

      {...props}
    >
      <path d="M20.65 21.35V7q0-1.1-.775-1.875Q19.1 4.35 18 4.35h-1.65v1.3q0 .3-.2.5t-.5.2H11.7q-.425 0-.587-.338-.163-.337-.013-.687l1.425-3.1q.15-.325.363-.45.212-.125.612-.125h2.15q.3 0 .5.2t.2.5v1.3H18q1.4 0 2.375.975.975.975.975 2.375v14.35ZM11.7 5.65h3.95v-3.3h-2.475ZM5 21.35q-1 0-1.675-.675T2.65 19v-2.5q0-.75.525-1.3t1.475-.55v-2.5q0-.625.438-1.063.437-.437 1.062-.437h7.7q.625 0 1.063.437.437.438.437 1.063v2.5q.95 0 1.475.525.525.525.525 1.325V19q0 1-.675 1.675T15 21.35Zm.35-9.2v2.65q.45.225.725.738.275.512.275.962v1.15h7.3V16.5q0-.45.275-.962.275-.513.725-.738v-2.65q0-.35-.225-.575-.225-.225-.575-.225h-7.7q-.35 0-.575.225-.225.225-.225.575ZM5 20.65h10q.75 0 1.2-.513.45-.512.45-1.137v-2.5q0-.525-.312-.838-.313-.312-.838-.312-.525 0-.837.312-.313.313-.313.838v1.85h-8.7V16.5q0-.525-.312-.838-.313-.312-.838-.312-.525 0-.837.312-.313.313-.313.838V19q0 .625.45 1.137.45.513 1.2.513ZM13.675 4ZM10 17.65Zm0 3Zm0-2.3Z"/>
    </Icon>
  )
});

export default IconMaterialSceneOutlinedW100;
