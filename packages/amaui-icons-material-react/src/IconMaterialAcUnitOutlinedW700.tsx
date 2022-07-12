import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAcUnitOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcUnitOutlinedW700'
      short_name='AcUnit'

      {...props}
    >
      <path d="M10.625 22.375V18.775L7.75 21.575L5.825 19.65L10.625 14.85V13.375H9.15L4.35 18.175L2.425 16.25L5.225 13.375H1.625V10.625H5.225L2.425 7.75L4.35 5.825L9.15 10.625H10.625V9.15L5.825 4.35L7.75 2.425L10.625 5.225V1.625H13.375V5.225L16.25 2.425L18.175 4.35L13.375 9.15V10.625H14.85L19.65 5.825L21.575 7.75L18.775 10.625H22.375V13.375H18.775L21.575 16.25L19.65 18.175L14.85 13.375H13.375V14.85L18.175 19.65L16.25 21.575L13.375 18.775V22.375Z"/>
    </Icon>
  )
});

export default IconMaterialAcUnitOutlinedW700;