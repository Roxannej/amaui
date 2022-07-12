import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressTwoTone'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M20.5 12.725q-.85 0-1.425-.588-.575-.587-.575-1.437v-6q0-.85.575-1.425Q19.65 2.7 20.5 2.7q.85 0 1.438.575.587.575.587 1.425v6q0 .85-.587 1.437-.588.588-1.438.588Zm-12.825 8.75q-.45 0-.85-.175-.4-.175-.725-.5L.825 15.475l.95-1.1q.325-.4.787-.463.463-.062 1.138.088l3.05.8V5.175q0-.825.537-1.35.538-.525 1.338-.525.825 0 1.35.525.525.525.525 1.35v5.25h.9q.3 0 .575.037.275.038.525.188l3.575 1.75q.75.35 1.012 1.075.263.725.138 1.525l-.775 4.625q-.125.825-.775 1.337-.65.513-1.475.513Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnPressTwoTone;