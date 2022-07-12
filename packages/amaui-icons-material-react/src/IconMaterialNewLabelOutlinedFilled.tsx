import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelOutlinedFilled'
      short_name='NewLabel'

      {...props}
    >
      <path d="M5 20V17H2V15H5V12H7V15H10V17H7V20ZM12 19V13H9V10H3V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L21 12L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19Z"/>
    </Icon>
  )
});

export default IconMaterialNewLabelOutlinedFilled;
