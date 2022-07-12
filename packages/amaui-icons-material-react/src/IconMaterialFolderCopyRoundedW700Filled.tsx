import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopyRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyRoundedW700Filled'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M3.375 21.95Q2.075 21.95 1.15 21.025Q0.225 20.1 0.225 18.8V7.575Q0.225 6.925 0.688 6.463Q1.15 6 1.8 6Q2.45 6 2.913 6.463Q3.375 6.925 3.375 7.575V18.8Q3.375 18.8 3.375 18.8Q3.375 18.8 3.375 18.8H19Q19.65 18.8 20.113 19.263Q20.575 19.725 20.575 20.375Q20.575 21.025 20.113 21.487Q19.65 21.95 19 21.95ZM8.525 16.8Q7.225 16.8 6.3 15.875Q5.375 14.95 5.375 13.65V3.625Q5.375 2.325 6.3 1.4Q7.225 0.475 8.525 0.475H10.7Q11.325 0.475 11.913 0.712Q12.5 0.95 12.925 1.375L14.375 2.85H20.625Q21.925 2.85 22.85 3.775Q23.775 4.7 23.775 6V13.65Q23.775 14.95 22.85 15.875Q21.925 16.8 20.625 16.8Z"/>
    </Icon>
  )
});

export default IconMaterialFolderCopyRoundedW700Filled;
