import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenRoundedW700Filled'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V5.925Q1.15 4.575 2.062 3.675Q2.975 2.775 4.3 2.775H8.325Q8.95 2.775 9.525 3.025Q10.1 3.275 10.525 3.7L12 5.15H19.7Q21.05 5.15 21.95 6.062Q22.85 6.975 22.85 8.3H7.45Q6.15 8.3 5.225 9.175Q4.3 10.05 4.3 11.1V17.825Q4.3 17.825 4.3 17.825Q4.3 17.825 4.3 17.825L6 12.5Q6.325 11.525 7.138 10.912Q7.95 10.3 9 10.3H19.95Q21.55 10.3 22.488 11.587Q23.425 12.875 22.925 14.425L21.85 17.9Q21.35 19.425 20.375 20.138Q19.4 20.85 17.825 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenRoundedW700Filled;
