import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveTwoTone'
      short_name='QuietTimeActive'

      {...props}
    >
      <path d="M20.825 18.05 5.975 3.175q1.125-1.05 2.5-1.763Q9.85.7 11.425.4q-.2 2.575.463 5.025.662 2.45 2.462 4.25 1.775 1.775 4.225 2.4 2.45.625 4.975.6-.3 1.575-.988 2.913-.687 1.337-1.737 2.462Zm-.6 5.75L17.1 20.65q-.925.35-1.925.562-1 .213-2.075.213-2.175 0-4.087-.825-1.913-.825-3.35-2.263Q4.225 16.9 3.4 14.987q-.825-1.912-.825-4.087 0-1.075.213-2.063Q3 7.85 3.35 6.925L.225 3.8 1.8 2.2l20 20Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeActiveTwoTone;
