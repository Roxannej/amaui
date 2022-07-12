import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepartitionOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepartitionOutlinedW700Filled'
      short_name='Repartition'

      {...props}
    >
      <path d="M2.425 14.3v-3.15h13.9q.875 0 1.487-.613.613-.612.613-1.487 0-.875-.613-1.488-.612-.612-1.487-.612h-9.1l1 1L6 10.2 1.175 5.375 6 .575l2.225 2.2-1 1.025h9.1q2.2 0 3.725 1.525t1.525 3.725q0 2.2-1.525 3.725T16.325 14.3Zm0 8.8v-7.55h19.15v7.55Zm3.15-3.15H8V18.7H5.575Zm5.075 0h2.7V18.7h-2.7Zm5.35 0h2.425V18.7H16Z"/>
    </Icon>
  )
});

export default IconMaterialRepartitionOutlinedW700Filled;