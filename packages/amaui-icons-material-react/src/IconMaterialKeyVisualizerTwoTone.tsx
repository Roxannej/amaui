import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyVisualizerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVisualizerTwoTone'
      short_name='KeyVisualizer'

      {...props}
    >
      <path d="M1.725 22.275V19.25H5.85V22.275ZM1.725 17.875V14.85H11.325V17.875ZM1.725 13.5V10.475H22.3V13.5ZM1.725 9.125V6.1H11.325V9.125ZM1.725 4.725V1.7H5.85V4.725ZM7.225 22.275V19.25H11.325V22.275ZM7.225 4.725V1.7H11.325V4.725ZM12.7 22.275V19.25H16.8V22.275ZM12.7 17.875V14.85H22.3V17.875ZM12.7 9.125V6.1H22.3V9.125ZM12.7 4.725V1.7H16.8V4.725ZM18.175 22.275V19.25H22.3V22.275ZM18.175 4.725V1.7H22.3V4.725Z"/>
    </Icon>
  )
});

export default IconMaterialKeyVisualizerTwoTone;
