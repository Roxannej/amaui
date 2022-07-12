import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressRoundedW700Filled'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M20.5 12.7q-.875 0-1.475-.6-.6-.6-.6-1.475v-6q0-.875.6-1.475.6-.6 1.475-.6.875 0 1.475.6.6.6.6 1.475v6q0 .875-.6 1.475-.6.6-1.475.6ZM7.775 21.475q-.5 0-.963-.175-.462-.175-.812-.525l-4.25-4.3q-.425-.425-.462-1.012-.038-.588.287-1.013.275-.4.725-.512.45-.113.975.012l3.4.875v-9.85q0-.8.55-1.338.55-.537 1.35-.537t1.338.537q.537.538.537 1.338v5.475h.9q.25 0 .475.037.225.038.45.163l3.775 1.85q.725.35 1 1.05.275.7.15 1.5l-.7 4.45q-.15.875-.825 1.425-.675.55-1.55.55Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnPressRoundedW700Filled;