import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopyOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyOutlinedW100Filled'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M3.8 19.4Q3.175 19.4 2.738 18.962Q2.3 18.525 2.3 17.9V8.7H3V17.9Q3 18.25 3.225 18.475Q3.45 18.7 3.8 18.7H18.75V19.4ZM6.5 16.7Q5.875 16.7 5.438 16.262Q5 15.825 5 15.2V4.8Q5 4.175 5.438 3.737Q5.875 3.3 6.5 3.3H12L13 4.3H20.2Q20.825 4.3 21.263 4.737Q21.7 5.175 21.7 5.8V15.2Q21.7 15.825 21.263 16.262Q20.825 16.7 20.2 16.7Z"/>
    </Icon>
  )
});

export default IconMaterialFolderCopyOutlinedW100Filled;
