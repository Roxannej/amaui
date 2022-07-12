import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmOffSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffSharpW700Filled'
      short_name='AlarmOff'

      {...props}
    >
      <path d="M20.55 17.45 7.325 4.2Q8.225 3.75 9.387 3.45Q10.55 3.15 11.75 3.15Q13.775 3.15 15.562 3.925Q17.35 4.7 18.7 6.05Q20.05 7.4 20.825 9.212Q21.6 11.025 21.6 13.1Q21.6 14.275 21.3 15.387Q21 16.5 20.55 17.45ZM21.775 7.925 16.825 2.975 18.525 1.3 23.45 6.225ZM19.95 23.85 17.225 21.15Q16.05 21.95 14.65 22.4Q13.25 22.85 11.75 22.85Q9.725 22.85 7.938 22.075Q6.15 21.3 4.8 19.962Q3.45 18.625 2.675 16.837Q1.9 15.05 1.9 13.025Q1.9 11.45 2.35 10.075Q2.8 8.7 3.6 7.525L2.875 6.8L1.725 7.925L0.05 6.25L1.2 5.1L-0.075 3.825L1.725 2L21.775 22.05Z"/>
    </Icon>
  )
});

export default IconMaterialAlarmOffSharpW700Filled;
