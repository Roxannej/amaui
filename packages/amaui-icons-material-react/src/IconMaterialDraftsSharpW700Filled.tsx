import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsSharpW700Filled'
      short_name='Drafts'

      {...props}
    >
      <path d="M1.15 22.075V6.7L12 0.225L22.85 6.7V22.075ZM12 12.575 19.275 8.225 12 3.875 4.725 8.225Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsSharpW700Filled;
