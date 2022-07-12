import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpdateRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateRoundedFilled'
      short_name='Update'

      {...props}
    >
      <path d="M13 11.6 15.5 14.1Q15.775 14.375 15.775 14.8Q15.775 15.225 15.5 15.5Q15.225 15.775 14.8 15.775Q14.375 15.775 14.1 15.5L11.3 12.7Q11.15 12.55 11.075 12.362Q11 12.175 11 11.975V8Q11 7.575 11.288 7.287Q11.575 7 12 7Q12.425 7 12.713 7.287Q13 7.575 13 8ZM12 21Q10.125 21 8.488 20.288Q6.85 19.575 5.638 18.362Q4.425 17.15 3.712 15.512Q3 13.875 3 12Q3 10.125 3.712 8.487Q4.425 6.85 5.638 5.637Q6.85 4.425 8.488 3.712Q10.125 3 12 3Q14.05 3 15.888 3.875Q17.725 4.75 19 6.35V5Q19 4.575 19.288 4.287Q19.575 4 20 4Q20.425 4 20.712 4.287Q21 4.575 21 5V9Q21 9.425 20.712 9.712Q20.425 10 20 10H16Q15.575 10 15.288 9.712Q15 9.425 15 9Q15 8.575 15.288 8.287Q15.575 8 16 8H17.75Q16.725 6.6 15.225 5.8Q13.725 5 12 5Q9.075 5 7.038 7.037Q5 9.075 5 12Q5 14.925 7.038 16.962Q9.075 19 12 19Q14.3 19 16.163 17.65Q18.025 16.3 18.675 14.1Q18.8 13.675 19.138 13.387Q19.475 13.1 19.9 13.2Q20.35 13.3 20.562 13.7Q20.775 14.1 20.65 14.55Q19.825 17.425 17.425 19.212Q15.025 21 12 21Z"/>
    </Icon>
  )
});

export default IconMaterialUpdateRoundedFilled;
