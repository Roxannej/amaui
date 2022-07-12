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
      <path d="M13.1 23.425q-2.175 0-4.087-.825-1.913-.825-3.35-2.263Q4.225 18.9 3.4 16.987q-.825-1.912-.825-4.087 0-3.05 1.625-5.588Q5.825 4.775 8.55 3.35q.95-.5 1.863.012.912.513 1.012 1.588.2 1.875.887 3.625.688 1.75 2.038 3.1 1.325 1.325 3.063 2 1.737.675 3.587.875 1.05.125 1.613.925.562.8.187 1.65-1.3 2.875-3.912 4.587-2.613 1.713-5.788 1.713Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeTwoTone;
