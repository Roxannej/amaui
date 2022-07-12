import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrapTextOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextOutlinedW700Filled'
      short_name='WrapText'

      {...props}
    >
      <path d="M14.975 21.55 10.8 17.375 14.825 13.375 16.225 14.8 15.2 15.8H17.25Q17.825 15.8 18.225 15.412Q18.625 15.025 18.625 14.45Q18.625 13.875 18.225 13.475Q17.825 13.075 17.25 13.075H3.425V9.925H17.25Q19.125 9.925 20.45 11.25Q21.775 12.575 21.775 14.45Q21.775 16.325 20.45 17.637Q19.125 18.95 17.25 18.95H15.425L16.475 20.025ZM3.425 7.2V4.05H20.575V7.2ZM3.425 18.95V15.8H9.575V18.95Z"/>
    </Icon>
  )
});

export default IconMaterialWrapTextOutlinedW700Filled;
