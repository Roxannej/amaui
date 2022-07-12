import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartRoundedW700Filled'
      short_name='TableChart'

      {...props}
    >
      <path d="M2.15 8.075V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V8.075ZM10.125 21.85V10.075H14.875V21.85ZM16.875 21.85V10.075H22.85V18.7Q22.85 20.025 21.938 20.938Q21.025 21.85 19.7 21.85ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V10.075H8.125V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialTableChartRoundedW700Filled;
