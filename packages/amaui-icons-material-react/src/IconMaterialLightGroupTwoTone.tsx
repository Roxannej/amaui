import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupTwoTone'
      short_name='LightGroup'

      {...props}
    >
      <path d="M2.425 23.225V20.2h9.025v3.025ZM17.5 21.45q-1.175 0-2-.838-.825-.837-.85-2.037h-2.075q-.625 0-1.062-.45-.438-.45-.438-1.075.05-2.275 1.437-3.937Q13.9 11.45 16 10.925V.725h3.025v10.2q2.1.525 3.5 2.188 1.4 1.662 1.425 3.937 0 .625-.45 1.075-.45.45-1.075.45h-2.05q-.025 1.2-.837 2.037-.813.838-2.038.838ZM5.425 18.575V10.6H2.05q-.75 0-1.212-.588Q.375 9.425.575 8.7L2.4 1.85q.125-.5.525-.813.4-.312.925-.312h6.2q.525 0 .925.312.4.313.5.813l1.85 6.85q.2.725-.275 1.312-.475.588-1.2.588h-3.4v7.975Z"/>
    </Icon>
  )
});

export default IconMaterialLightGroupTwoTone;