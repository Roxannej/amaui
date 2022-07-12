import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharedRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedRoundedW700Filled'
      short_name='FolderShared'

      {...props}
    >
      <path d="M15 13Q15.825 13 16.413 12.412Q17 11.825 17 11Q17 10.175 16.413 9.587Q15.825 9 15 9Q14.175 9 13.588 9.587Q13 10.175 13 11Q13 11.825 13.588 12.412Q14.175 13 15 13ZM11 17H19V16.45Q19 15.35 17.9 14.675Q16.8 14 15 14Q13.2 14 12.1 14.675Q11 15.35 11 16.45ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V5.925Q1.15 4.6 2.062 3.687Q2.975 2.775 4.3 2.775H8.325Q8.95 2.775 9.525 3.025Q10.1 3.275 10.525 3.7L12 5.15H19.7Q21.025 5.15 21.938 6.062Q22.85 6.975 22.85 8.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialFolderSharedRoundedW700Filled;
