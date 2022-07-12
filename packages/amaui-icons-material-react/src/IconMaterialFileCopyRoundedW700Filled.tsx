import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopyRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyRoundedW700Filled'
      short_name='FileCopy'

      {...props}
    >
      <path d="M19.35 18.625H9.35Q8.025 18.625 7.113 17.712Q6.2 16.8 6.2 15.475V3.375Q6.2 2.05 7.113 1.137Q8.025 0.225 9.35 0.225H14.7Q15.325 0.225 15.913 0.475Q16.5 0.725 16.925 1.15L21.575 5.8Q22 6.225 22.25 6.812Q22.5 7.4 22.5 8.025V15.475Q22.5 16.8 21.587 17.712Q20.675 18.625 19.35 18.625ZM4.2 23.775Q2.875 23.775 1.962 22.862Q1.05 21.95 1.05 20.625V8.5Q1.05 7.85 1.513 7.387Q1.975 6.925 2.625 6.925Q3.275 6.925 3.738 7.387Q4.2 7.85 4.2 8.5V20.625Q4.2 20.625 4.2 20.625Q4.2 20.625 4.2 20.625H13.85Q14.5 20.625 14.963 21.087Q15.425 21.55 15.425 22.2Q15.425 22.85 14.963 23.312Q14.5 23.775 13.85 23.775ZM15.925 8.375H19.35L14.35 3.375V6.8Q14.35 7.45 14.812 7.912Q15.275 8.375 15.925 8.375Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopyRoundedW700Filled;
