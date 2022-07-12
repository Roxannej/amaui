import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHailRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailRoundedW100Filled'
      short_name='Hail'

      {...props}
    >
      <path d="M12 5.7Q11.325 5.7 10.863 5.237Q10.4 4.775 10.4 4.1Q10.4 3.425 10.863 2.962Q11.325 2.5 12 2.5Q12.675 2.5 13.138 2.962Q13.6 3.425 13.6 4.1Q13.6 4.775 13.138 5.237Q12.675 5.7 12 5.7ZM10.4 21.35Q10.25 21.35 10.15 21.25Q10.05 21.15 10.05 21V8.475Q8.475 8.9 7.6 9.862Q6.725 10.825 6.45 12.525Q6.425 12.65 6.312 12.75Q6.2 12.85 6.075 12.85Q5.925 12.85 5.825 12.738Q5.725 12.625 5.75 12.475Q6.075 10.05 7.713 8.8Q9.35 7.55 12 7.55Q14.55 7.55 15.975 6.875Q17.4 6.2 17.625 3.9Q17.65 3.75 17.75 3.65Q17.85 3.55 18 3.55Q18.15 3.55 18.25 3.65Q18.35 3.75 18.325 3.9Q18.175 5.825 17.075 6.9Q15.975 7.975 13.95 8.15V21Q13.95 21.15 13.85 21.25Q13.75 21.35 13.6 21.35Q13.45 21.35 13.35 21.25Q13.25 21.15 13.25 21V15.5H10.75V21Q10.75 21.15 10.65 21.25Q10.55 21.35 10.4 21.35ZM5.9 21.35Q5.575 21.35 5.363 21.138Q5.15 20.925 5.15 20.6V17.4Q5.15 17.075 5.363 16.862Q5.575 16.65 5.9 16.65H6.1Q6.425 16.65 6.638 16.862Q6.85 17.075 6.85 17.4V20.6Q6.85 20.925 6.638 21.138Q6.425 21.35 6.1 21.35Z"/>
    </Icon>
  )
});

export default IconMaterialHailRoundedW100Filled;
