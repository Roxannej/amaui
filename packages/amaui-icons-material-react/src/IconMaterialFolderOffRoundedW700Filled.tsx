import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffRoundedW700Filled'
      short_name='FolderOff'

      {...props}
    >
      <path d="M22.425 19.3 5.9 2.775H8.325Q8.95 2.775 9.525 3.025Q10.1 3.275 10.525 3.7L12 5.15H19.7Q21.025 5.15 21.938 6.062Q22.85 6.975 22.85 8.3V17.7Q22.85 18.1 22.738 18.525Q22.625 18.95 22.425 19.3ZM19.975 23 17.8 20.85H4.3Q2.975 20.85 2.062 19.925Q1.15 19 1.15 17.7V5.925Q1.15 5.575 1.238 5.2Q1.325 4.825 1.475 4.525L1 4.025Q0.625 3.65 0.637 3.175Q0.65 2.7 1 2.35Q1.35 2 1.838 2Q2.325 2 2.675 2.35L21.65 21.325Q22 21.675 21.988 22.163Q21.975 22.65 21.625 23Q21.275 23.35 20.8 23.35Q20.325 23.35 19.975 23Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOffRoundedW700Filled;
