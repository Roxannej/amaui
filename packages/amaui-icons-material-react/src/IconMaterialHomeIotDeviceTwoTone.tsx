import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeIotDeviceTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeIotDeviceTwoTone'
      short_name='HomeIotDevice'

      {...props}
    >
      <path d="M4.575 10.325h.9V6.3q0-.175-.112-.313-.113-.137-.313-.137t-.337.137q-.138.138-.138.313Zm.45 10.45q-2.125 0-3.612-1.487Q-.075 17.8-.075 15.675q0-1.275.538-2.313Q1 12.325 1.95 11.625V6.3q0-1.275.9-2.188.9-.912 2.2-.912 1.3 0 2.188.9.887.9.887 2.2v5.325q.95.7 1.488 1.737.537 1.038.537 2.313 0 2.15-1.475 3.625t-3.65 1.475Zm9-5.65q-1.325-.975-2.075-2.35-.75-1.375-.75-3.1 0-2.7 1.888-4.588Q14.975 3.2 17.675 3.2q2.7 0 4.563 1.887Q24.1 6.975 24.1 9.675q0 1.725-.737 3.1-.738 1.375-2.063 2.35Zm3.65 5.65q-.65 0-1.113-.463-.462-.462-.487-1.062h3.15q-.025.6-.487 1.062-.463.463-1.063.463Zm-3.275-2.2v-2.25h6.5v2.25Z"/>
    </Icon>
  )
});

export default IconMaterialHomeIotDeviceTwoTone;