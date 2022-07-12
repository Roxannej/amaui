import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseTwoTone'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m6.95 14.125 5.05-3.95 5.075 3.95q.25-.7.387-1.475.138-.775.138-1.55v-.4l-3.75-2.9q-.8-.625-1.837-.625-1.038 0-1.863.625L6.4 10.7v.4q0 .775.15 1.55t.4 1.475ZM12 19.5q.7-.275 1.338-.688.637-.412 1.187-.887V16q0-.625-.45-1.075-.45-.45-1.075-.45h-2q-.6 0-1.05.45-.45.45-.45 1.075v1.925q.55.475 1.188.887.637.413 1.312.688Zm0 3.025q-.225 0-.412-.05-.188-.05-.338-.075-3.475-1.15-5.675-4.338-2.2-3.187-2.2-6.962V6.675q0-.925.538-1.713.537-.787 1.437-1.112l5.6-2.1q.525-.2 1.063-.2.537 0 1.062.2l5.6 2.1q.875.325 1.412 1.112.538.788.538 1.713V11.1q0 3.775-2.2 6.962-2.2 3.188-5.675 4.338l-.75.125Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHouseTwoTone;
