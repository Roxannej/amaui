import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatRoundedFilled'
      short_name='Nat'

      {...props}
    >
      <path d="M4 15Q2.75 15 1.875 14.125Q1 13.25 1 12Q1 10.75 1.875 9.875Q2.75 9 4 9Q4.975 9 5.738 9.562Q6.5 10.125 6.8 11H11V13H6.8Q6.5 13.875 5.738 14.438Q4.975 15 4 15ZM4 13Q4.425 13 4.713 12.712Q5 12.425 5 12Q5 11.575 4.713 11.287Q4.425 11 4 11Q3.575 11 3.288 11.287Q3 11.575 3 12Q3 12.425 3.288 12.712Q3.575 13 4 13ZM6 21.95Q5.6 22 5.3 21.712Q5 21.425 5 21Q5 20.6 5.287 20.3Q5.575 20 6 19.95Q8.975 19.575 10.988 17.325Q13 15.075 13 12Q13 8.925 10.988 6.675Q8.975 4.425 6 4.05Q5.575 4 5.287 3.712Q5 3.425 5 3Q5 2.575 5.3 2.287Q5.6 2 6 2.05Q9.575 2.4 12.088 4.912Q14.6 7.425 14.95 11H19.15L18.275 10.1Q18 9.8 18 9.4Q18 9 18.3 8.7Q18.575 8.425 19 8.425Q19.425 8.425 19.7 8.7L22.3 11.3Q22.45 11.45 22.513 11.625Q22.575 11.8 22.575 12Q22.575 12.2 22.513 12.375Q22.45 12.55 22.3 12.7L19.7 15.3Q19.425 15.575 19 15.575Q18.575 15.575 18.3 15.3Q18 15 18 14.6Q18 14.2 18.275 13.9L19.15 13H14.95Q14.6 16.575 12.088 19.087Q9.575 21.6 6 21.95Z"/>
    </Icon>
  )
});

export default IconMaterialNatRoundedFilled;
