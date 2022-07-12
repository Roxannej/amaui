import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenOutlinedW700Filled'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V5.925Q1.15 4.575 2.062 3.675Q2.975 2.775 4.3 2.775H9.625L12 5.15H19.7Q21.05 5.15 21.95 6.062Q22.85 6.975 22.85 8.3H4.3V17.825Q4.3 17.825 4.3 17.825Q4.3 17.825 4.3 17.825L6.7 10.3H24.275L21.85 17.9Q21.35 19.425 20.375 20.138Q19.4 20.85 17.825 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenOutlinedW700Filled;
