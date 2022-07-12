import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelImportantOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantOutlinedFilled'
      short_name='LabelImportant'

      {...props}
    >
      <path d="M3 19 7.5 12 3 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L21 12L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19Z"/>
    </Icon>
  )
});

export default IconMaterialLabelImportantOutlinedFilled;