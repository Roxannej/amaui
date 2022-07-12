import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotOutlinedW700Filled'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H17V8H12ZM12 16H17V14H12ZM9 11Q9.825 11 10.413 10.412Q11 9.825 11 9Q11 8.175 10.413 7.587Q9.825 7 9 7Q8.175 7 7.588 7.587Q7 8.175 7 9Q7 9.825 7.588 10.412Q8.175 11 9 11ZM9 17Q9.825 17 10.413 16.413Q11 15.825 11 15Q11 14.175 10.413 13.587Q9.825 13 9 13Q8.175 13 7.588 13.587Q7 14.175 7 15Q7 15.825 7.588 16.413Q8.175 17 9 17ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBallotOutlinedW700Filled;
