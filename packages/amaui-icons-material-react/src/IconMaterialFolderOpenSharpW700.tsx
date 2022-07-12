import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenSharpW700'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M1.15 20.85V2.775H9.625L12 5.15H22.85V8.3H10.7L8.3 5.925H4.3V17.825L6.7 10.3H24.275L20.875 20.85ZM7.675 17.7H18.6L19.925 13.45H9ZM7.675 17.7 9 13.45 7.675 17.7ZM4.3 8.3V5.925V8.3Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenSharpW700;
