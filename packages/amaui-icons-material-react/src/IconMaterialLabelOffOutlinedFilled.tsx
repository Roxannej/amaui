import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffOutlinedFilled'
      short_name='LabelOff'

      {...props}
    >
      <path d="M18.45 15.6 7.85 5H15Q15.5 5 15.925 5.213Q16.35 5.425 16.65 5.85L21 12ZM19.8 22.6 15.95 18.75Q15.725 18.875 15.5 18.938Q15.275 19 15 19H5Q4.175 19 3.587 18.413Q3 17.825 3 17V7Q3 6.725 3.062 6.5Q3.125 6.275 3.25 6.05L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  )
});

export default IconMaterialLabelOffOutlinedFilled;
