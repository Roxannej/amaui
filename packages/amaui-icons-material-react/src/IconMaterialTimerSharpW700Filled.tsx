import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerSharpW700Filled'
      short_name='Timer'

      {...props}
    >
      <path d="M8.225 3V0.225H15.775V3ZM10.625 14.7H13.375V8.625H10.625ZM12 23.525Q9.95 23.525 8.163 22.75Q6.375 21.975 5.037 20.65Q3.7 19.325 2.925 17.538Q2.15 15.75 2.15 13.7Q2.15 11.65 2.925 9.862Q3.7 8.075 5.037 6.737Q6.375 5.4 8.163 4.625Q9.95 3.85 12 3.85Q13.6 3.85 15.125 4.35Q16.65 4.85 17.925 5.825L19.625 4.125L21.6 6.1L19.9 7.8Q20.875 9.075 21.363 10.587Q21.85 12.1 21.85 13.7Q21.85 15.75 21.075 17.538Q20.3 19.325 18.962 20.65Q17.625 21.975 15.838 22.75Q14.05 23.525 12 23.525Z"/>
    </Icon>
  )
});

export default IconMaterialTimerSharpW700Filled;
