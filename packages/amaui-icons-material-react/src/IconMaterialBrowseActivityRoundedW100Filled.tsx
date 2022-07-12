import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityRoundedW100Filled'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="m12 13.75.95-2.3 2.3-.95-2.3-.95-.95-2.3-.95 2.3-2.3.95 2.3.95ZM4.8 16.7q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.45 1.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h19.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityRoundedW100Filled;
