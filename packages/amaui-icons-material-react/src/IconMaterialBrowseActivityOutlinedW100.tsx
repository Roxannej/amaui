import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityOutlinedW100'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="m12 13.75.95-2.3 2.3-.95-2.3-.95-.95-2.3-.95 2.3-2.3.95 2.3.95ZM4.8 16.7q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q19.5 5 19.2 5H4.8q-.3 0-.55.25Q4 5.5 4 5.8v9.4q0 .3.25.55.25.25.55.25ZM2 18.4v-.7h20v.7ZM4 16V5v11Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityOutlinedW100;