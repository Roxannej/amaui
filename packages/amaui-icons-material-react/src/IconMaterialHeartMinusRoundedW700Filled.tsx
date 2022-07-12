import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeartMinusRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinusRoundedW700Filled'
      short_name='HeartMinus'

      {...props}
    >
      <path d="M13.425 14.575v-3.15h9.15v3.15Zm-2.45 7.575L8.95 20.325q-2.625-2.375-4.337-4.087-1.713-1.713-2.7-3.088Q.925 11.775.525 10.6q-.4-1.175-.4-2.45 0-2.725 1.825-4.55 1.825-1.825 4.525-1.825 1.275 0 2.425.45t2.075 1.325q.95-.875 2.087-1.325 1.138-.45 2.413-.45 2.6 0 4.413 1.675 1.812 1.675 1.987 4.225-.825-.6-1.813-.925-.987-.325-2.037-.35-2.75 0-4.675 1.925Q11.425 10.25 11.425 13q0 1.775.887 3.288.888 1.512 2.463 2.412l-.85.8q-.425.4-.925.825Z"/>
    </Icon>
  )
});

export default IconMaterialHeartMinusRoundedW700Filled;