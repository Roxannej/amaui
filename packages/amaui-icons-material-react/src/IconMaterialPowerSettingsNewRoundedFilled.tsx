import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNewRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewRoundedFilled'
      short_name='PowerSettingsNew'

      {...props}
    >
      <path d="M12 13Q11.575 13 11.288 12.712Q11 12.425 11 12V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM12 21Q10.125 21 8.488 20.288Q6.85 19.575 5.638 18.362Q4.425 17.15 3.712 15.512Q3 13.875 3 12Q3 10.275 3.625 8.7Q4.25 7.125 5.425 5.85Q5.7 5.55 6.125 5.55Q6.55 5.55 6.85 5.85Q7.125 6.125 7.1 6.537Q7.075 6.95 6.8 7.275Q5.925 8.25 5.463 9.462Q5 10.675 5 12Q5 14.925 7.038 16.962Q9.075 19 12 19Q14.925 19 16.962 16.962Q19 14.925 19 12Q19 10.675 18.525 9.438Q18.05 8.2 17.175 7.225Q16.9 6.925 16.888 6.525Q16.875 6.125 17.15 5.85Q17.45 5.55 17.875 5.55Q18.3 5.55 18.575 5.85Q19.75 7.125 20.375 8.7Q21 10.275 21 12Q21 13.875 20.288 15.512Q19.575 17.15 18.363 18.362Q17.15 19.575 15.513 20.288Q13.875 21 12 21Z"/>
    </Icon>
  )
});

export default IconMaterialPowerSettingsNewRoundedFilled;
