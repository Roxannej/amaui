import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeTwoTone'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 23.425q-2.175 0-4.087-.825-1.913-.825-3.35-2.263Q4.225 18.9 3.4 16.987q-.825-1.912-.825-4.087 0-3.9 2.525-6.838Q7.625 3.125 11.425 2.4q-.2 2.575.463 5.025.662 2.45 2.462 4.25 1.775 1.775 4.225 2.4 2.45.625 4.975.6-.675 3.775-3.6 6.263-2.925 2.487-6.85 2.487Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeTwoTone;
