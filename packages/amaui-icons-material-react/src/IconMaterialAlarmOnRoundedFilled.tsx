import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnRoundedFilled'
      short_name='AlarmOn'

      {...props}
    >
      <path d="M10.95 13.7 9.55 12.275Q9.25 12 8.825 12Q8.4 12 8.125 12.275Q7.825 12.575 7.812 12.987Q7.8 13.4 8.1 13.7L10.25 15.85Q10.525 16.125 10.95 16.125Q11.375 16.125 11.65 15.85L15.9 11.6Q16.175 11.325 16.175 10.9Q16.175 10.475 15.9 10.175Q15.6 9.9 15.188 9.887Q14.775 9.875 14.475 10.175ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13Q3 11.125 3.712 9.487Q4.425 7.85 5.638 6.637Q6.85 5.425 8.488 4.713Q10.125 4 12 4Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22ZM3.425 7.325Q3.15 7.6 2.738 7.587Q2.325 7.575 2.05 7.3Q1.775 7.025 1.775 6.6Q1.775 6.175 2.05 5.9L4.925 3.025Q5.2 2.75 5.613 2.762Q6.025 2.775 6.3 3.05Q6.575 3.325 6.575 3.75Q6.575 4.175 6.3 4.45ZM20.55 7.3 17.675 4.425Q17.4 4.15 17.413 3.737Q17.425 3.325 17.7 3.05Q17.975 2.775 18.4 2.775Q18.825 2.775 19.1 3.05L21.975 5.925Q22.25 6.2 22.238 6.612Q22.225 7.025 21.95 7.3Q21.675 7.575 21.25 7.575Q20.825 7.575 20.55 7.3Z"/>
    </Icon>
  );
});

export default IconMaterialAlarmOnRoundedFilled;