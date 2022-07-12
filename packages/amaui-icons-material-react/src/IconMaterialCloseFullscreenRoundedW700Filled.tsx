import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenRoundedW700Filled'
      short_name='CloseFullscreen'

      {...props}
    >
      <path d="M13.575 12Q12.925 12 12.463 11.537Q12 11.075 12 10.425V4.425Q12 3.775 12.463 3.312Q12.925 2.85 13.575 2.85Q14.225 2.85 14.688 3.312Q15.15 3.775 15.15 4.425V6.65L19.5 2.3Q19.95 1.85 20.6 1.85Q21.25 1.85 21.7 2.3Q22.15 2.75 22.15 3.4Q22.15 4.05 21.7 4.5L17.35 8.85H19.575Q20.225 8.85 20.688 9.312Q21.15 9.775 21.15 10.425Q21.15 11.075 20.688 11.537Q20.225 12 19.575 12ZM2.3 21.7Q1.85 21.25 1.85 20.6Q1.85 19.95 2.3 19.5L6.65 15.15H4.425Q3.775 15.15 3.312 14.688Q2.85 14.225 2.85 13.575Q2.85 12.925 3.312 12.462Q3.775 12 4.425 12H10.425Q11.075 12 11.538 12.462Q12 12.925 12 13.575V19.575Q12 20.225 11.538 20.688Q11.075 21.15 10.425 21.15Q9.775 21.15 9.312 20.688Q8.85 20.225 8.85 19.575V17.35L4.5 21.7Q4.05 22.15 3.4 22.15Q2.75 22.15 2.3 21.7Z"/>
    </Icon>
  )
});

export default IconMaterialCloseFullscreenRoundedW700Filled;