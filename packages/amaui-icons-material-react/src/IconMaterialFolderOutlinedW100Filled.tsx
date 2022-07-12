import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOutlinedW100Filled'
      short_name='Folder'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H11L12 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOutlinedW100Filled;
