import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenSharpW700Filled'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M1.15 20.85V2.775H9.625L12 5.15H22.85V8.3H4.3V17.825L6.7 10.3H24.275L20.875 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenSharpW700Filled;
