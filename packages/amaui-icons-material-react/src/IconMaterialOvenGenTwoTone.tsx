import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOvenGenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGenTwoTone'
      short_name='OvenGen'

      {...props}
    >
      <path d="M2.375 12.8h4.25v5H17.4v-5h4.225v5.8q0 1.275-.875 2.15t-2.15.875H5.4q-1.275 0-2.15-.875t-.875-2.15Zm6.875 2.375V12.8h5.525v2.375Zm-6.875-5V5.4q0-1.275.875-2.15t2.15-.875h13.2q1.275 0 2.15.875t.875 2.15v4.775Zm5.55-1.95q.55 0 .938-.375.387-.375.387-.925t-.387-.938Q8.475 5.6 7.925 5.6q-.55 0-.925.387-.375.388-.375.938 0 .55.375.925t.925.375Zm4.075 0q.55 0 .938-.375.387-.375.387-.925t-.387-.938Q12.55 5.6 12 5.6q-.55 0-.925.387-.375.388-.375.938 0 .55.375.925t.925.375Zm4.075 0q.55 0 .938-.375.387-.375.387-.925t-.387-.938q-.388-.387-.938-.387-.55 0-.925.387-.375.388-.375.938 0 .55.375.925t.925.375Z"/>
    </Icon>
  )
});

export default IconMaterialOvenGenTwoTone;