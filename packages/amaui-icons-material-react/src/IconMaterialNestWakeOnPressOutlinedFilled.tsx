import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressOutlinedFilled'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M20.5 13.125q-.625 0-1.062-.437Q19 12.25 19 11.625v-6q0-.625.438-1.063.437-.437 1.062-.437t1.062.437Q22 5 22 5.625v6q0 .625-.438 1.063-.437.437-1.062.437Zm-12.175 8q-.45 0-.913-.163-.462-.162-.737-.437l-4.55-4.775.825-.85q.175-.175.412-.25.238-.075.513-.025l3.25.75V4.625q0-.625.437-1.063.438-.437 1.063-.437t1.063.437q.437.438.437 1.063v6h.9q.2 0 .45.05t.45.15l4.1 2.05q.575.275.875.862.3.588.2 1.213l-.625 4.45q-.125.75-.675 1.237-.55.488-1.3.488Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnPressOutlinedFilled;