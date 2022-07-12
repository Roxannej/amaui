import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradingSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingSharpW700'
      short_name='Grading'

      {...props}
    >
      <path d="M2.625 9V6.225H21.375V9ZM2.625 13.375V10.625H21.375V13.375ZM2.625 17.775V15H12V17.775ZM2.625 22.15V19.375H12V22.15ZM16.275 22.125 12.75 18.6 14.7 16.675 16.275 18.25 19.45 15.075 21.375 17.025ZM2.625 4.625V1.85H21.375V4.625Z"/>
    </Icon>
  )
});

export default IconMaterialGradingSharpW700;
