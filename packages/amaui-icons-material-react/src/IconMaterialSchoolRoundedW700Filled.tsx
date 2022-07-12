import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolRoundedW700Filled'
      short_name='School'

      {...props}
    >
      <path d="M22.35 17.375Q21.775 17.375 21.363 16.975Q20.95 16.575 20.95 16V10.525L13.5 14.575Q13.15 14.775 12.775 14.863Q12.4 14.95 12 14.95Q11.6 14.95 11.225 14.863Q10.85 14.775 10.5 14.575L2.8 10.4Q2.4 10.2 2.188 9.812Q1.975 9.425 1.975 9Q1.975 8.575 2.188 8.2Q2.4 7.825 2.8 7.625L10.5 3.425Q10.85 3.225 11.225 3.137Q11.6 3.05 12 3.05Q12.4 3.05 12.775 3.137Q13.15 3.225 13.5 3.425L22.9 8.55Q23.3 8.75 23.513 9.137Q23.725 9.525 23.725 9.95V16Q23.725 16.575 23.325 16.975Q22.925 17.375 22.35 17.375ZM12 20.9Q11.6 20.9 11.238 20.812Q10.875 20.725 10.525 20.525L6.325 18.3Q5.55 17.875 5.1 17.125Q4.65 16.375 4.65 15.5V12.775L9.9 15.65Q10.4 15.925 10.913 16.137Q11.425 16.35 12 16.35Q12.575 16.35 13.088 16.125Q13.6 15.9 14.1 15.625L19.35 12.775V15.5Q19.35 16.375 18.9 17.125Q18.45 17.875 17.675 18.3L13.475 20.525Q13.125 20.725 12.762 20.812Q12.4 20.9 12 20.9Z"/>
    </Icon>
  )
});

export default IconMaterialSchoolRoundedW700Filled;