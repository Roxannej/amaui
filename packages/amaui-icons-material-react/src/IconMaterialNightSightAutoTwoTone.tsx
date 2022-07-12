import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightSightAutoTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoTwoTone'
      short_name='NightSightAuto'

      {...props}
    >
      <path d="M11 19.275Q12.125 19.275 13.213 18.85Q14.3 18.425 15.15 17.7Q11.775 17.175 9.525 14.6Q7.275 12.025 7.275 8.55Q7.275 8.425 7.275 8.275Q7.275 8.125 7.325 7.95Q6.125 8.825 5.425 10.15Q4.725 11.475 4.725 13Q4.725 15.6 6.562 17.438Q8.4 19.275 11 19.275ZM11 22.3Q7.125 22.3 4.412 19.587Q1.7 16.875 1.7 13Q1.7 9.1 4.412 6.387Q7.125 3.675 11 3.675Q11.3 3.675 11.675 3.725Q12.05 3.775 12.325 3.875Q11.35 4.95 10.825 6.112Q10.3 7.275 10.3 8.55Q10.3 11.15 12.138 12.987Q13.975 14.825 16.575 14.825Q17.625 14.825 18.525 14.6Q19.425 14.375 20.275 13.95Q19.625 17.5 17.075 19.9Q14.525 22.3 11 22.3ZM13.525 11.2 16.775 1.75H19.25L22.5 11.2H20.175L19.525 9.4H16.5L15.85 11.2ZM17.15 7.4H18.875L18 4.725Z"/>
    </Icon>
  )
});

export default IconMaterialNightSightAutoTwoTone;
