import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotOutlinedW100Filled'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H16.5V9.3H12ZM12 14.7H16.5V14H12ZM9 10.65Q9.425 10.65 9.713 10.35Q10 10.05 10 9.65Q10 9.225 9.713 8.938Q9.425 8.65 9 8.65Q8.6 8.65 8.3 8.938Q8 9.225 8 9.65Q8 10.05 8.3 10.35Q8.6 10.65 9 10.65ZM9 15.35Q9.425 15.35 9.713 15.05Q10 14.75 10 14.35Q10 13.925 9.713 13.637Q9.425 13.35 9 13.35Q8.6 13.35 8.3 13.637Q8 13.925 8 14.35Q8 14.75 8.3 15.05Q8.6 15.35 9 15.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialBallotOutlinedW100Filled;
