import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreRoundedFilled'
      short_name='More'

      {...props}
    >
      <path d="M9.525 13Q9.95 13 10.238 12.712Q10.525 12.425 10.525 12Q10.525 11.575 10.238 11.287Q9.95 11 9.525 11Q9.1 11 8.812 11.287Q8.525 11.575 8.525 12Q8.525 12.425 8.812 12.712Q9.1 13 9.525 13ZM13.025 13Q13.45 13 13.738 12.712Q14.025 12.425 14.025 12Q14.025 11.575 13.738 11.287Q13.45 11 13.025 11Q12.6 11 12.312 11.287Q12.025 11.575 12.025 12Q12.025 12.425 12.312 12.712Q12.6 13 13.025 13ZM16.525 13Q16.95 13 17.238 12.712Q17.525 12.425 17.525 12Q17.525 11.575 17.238 11.287Q16.95 11 16.525 11Q16.1 11 15.812 11.287Q15.525 11.575 15.525 12Q15.525 12.425 15.812 12.712Q16.1 13 16.525 13ZM9.025 19Q8.525 19 8.088 18.775Q7.65 18.55 7.375 18.15L3.85 13.15Q3.475 12.625 3.475 12Q3.475 11.375 3.85 10.85L7.375 5.85Q7.65 5.45 8.088 5.225Q8.525 5 9.025 5H19.025Q19.85 5 20.438 5.588Q21.025 6.175 21.025 7V17Q21.025 17.825 20.438 18.413Q19.85 19 19.025 19Z"/>
    </Icon>
  )
});

export default IconMaterialMoreRoundedFilled;
