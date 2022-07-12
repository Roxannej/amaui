import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireHydrantTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantTwoTone'
      short_name='FireHydrant'

      {...props}
    >
      <path d="M3.5 22.675V19.65H5.325V18.025H5Q3.875 18.025 3.1 17.25Q2.325 16.475 2.325 15.35V13.35Q2.325 12.225 3.1 11.438Q3.875 10.65 5 10.65H5.325V9.1H3.5V6.075H5.6Q6.225 4 7.975 2.65Q9.725 1.3 12 1.3Q14.3 1.3 16.038 2.65Q17.775 4 18.4 6.075H20.525V9.1H18.7V10.65H19Q20.125 10.65 20.913 11.438Q21.7 12.225 21.7 13.35V15.35Q21.7 16.475 20.913 17.25Q20.125 18.025 19 18.025H18.7V19.65H20.525V22.675ZM12 17.275Q13.225 17.275 14.088 16.425Q14.95 15.575 14.95 14.35Q14.95 13.125 14.088 12.262Q13.225 11.4 12 11.4Q10.775 11.4 9.925 12.262Q9.075 13.125 9.075 14.35Q9.075 15.575 9.925 16.425Q10.775 17.275 12 17.275ZM12 14.9Q11.775 14.9 11.613 14.75Q11.45 14.6 11.45 14.35Q11.45 14.125 11.6 13.95Q11.75 13.775 12 13.775Q12.225 13.775 12.4 13.938Q12.575 14.1 12.575 14.35Q12.575 14.575 12.413 14.738Q12.25 14.9 12 14.9Z"/>
    </Icon>
  )
});

export default IconMaterialFireHydrantTwoTone;