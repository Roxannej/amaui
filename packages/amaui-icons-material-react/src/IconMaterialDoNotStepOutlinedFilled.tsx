import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotStepOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepOutlinedFilled'
      short_name='DoNotStep'

      {...props}
    >
      <path d="M18.5 15.675 17.1 14.275 21.575 9.8 23 11.2ZM16.4 13.55 9.3 6.475 13.8 2 20.875 9.075ZM19.775 22.6 13.825 16.675 10.5 20H1V17.375Q1 16.725 1.363 16.225Q1.725 15.725 2.3 15.5Q2.725 15.325 3.237 15.075Q3.75 14.825 4.275 14.475L5.65 15.85Q5.8 16 6 16Q6.2 16 6.35 15.85Q6.5 15.7 6.5 15.5Q6.5 15.3 6.35 15.15L5.075 13.85Q5.275 13.65 5.463 13.462Q5.65 13.275 5.85 13.05L7.125 14.325Q7.275 14.475 7.475 14.475Q7.675 14.475 7.825 14.325Q7.975 14.175 7.975 13.975Q7.975 13.775 7.825 13.625L6.425 12.225Q6.575 11.95 6.688 11.675Q6.8 11.4 6.875 11.1L8.575 12.825Q8.725 12.975 8.925 12.975Q9.125 12.975 9.275 12.825Q9.425 12.675 9.438 12.475Q9.45 12.275 9.3 12.125L1.4 4.225L2.8 2.8L21.175 21.2Z"/>
    </Icon>
  )
});

export default IconMaterialDoNotStepOutlinedFilled;