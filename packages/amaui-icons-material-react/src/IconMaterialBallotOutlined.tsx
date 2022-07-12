import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotOutlined'
      short_name='Ballot'

      {...props}
    >
      <path d="M12 10H17V8H12ZM12 16H17V14H12ZM9 11Q9.825 11 10.413 10.412Q11 9.825 11 9Q11 8.175 10.413 7.587Q9.825 7 9 7Q8.175 7 7.588 7.587Q7 8.175 7 9Q7 9.825 7.588 10.412Q8.175 11 9 11ZM9 17Q9.825 17 10.413 16.413Q11 15.825 11 15Q11 14.175 10.413 13.587Q9.825 13 9 13Q8.175 13 7.588 13.587Q7 14.175 7 15Q7 15.825 7.588 16.413Q8.175 17 9 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialBallotOutlined;
