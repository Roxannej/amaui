import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRunCircleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunCircleOutlinedFilled'
      short_name='RunCircle'

      {...props}
    >
      <path d="M13 18V14.425L11.875 13.2L11.35 15.85L7.6 15.075L7.8 14.1L10.575 14.675L11.55 9.775L10 10.35V12H9V9.65L12.275 8.45Q12.65 8.325 13.012 8.475Q13.375 8.625 13.55 8.975Q14.175 10.25 14.938 10.625Q15.7 11 16 11V12Q15.475 12 14.625 11.587Q13.775 11.175 13.1 10.25L12.675 12.6L14 14.025V18ZM13.5 8Q13.075 8 12.788 7.713Q12.5 7.425 12.5 7Q12.5 6.575 12.788 6.287Q13.075 6 13.5 6Q13.925 6 14.213 6.287Q14.5 6.575 14.5 7Q14.5 7.425 14.213 7.713Q13.925 8 13.5 8ZM12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialRunCircleOutlinedFilled;
