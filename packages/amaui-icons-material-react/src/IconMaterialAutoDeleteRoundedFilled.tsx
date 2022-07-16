import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteRoundedFilled'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12ZM17.5 16.8V14.5Q17.5 14.3 17.35 14.15Q17.2 14 17 14Q16.8 14 16.65 14.15Q16.5 14.3 16.5 14.5V16.775Q16.5 16.975 16.575 17.163Q16.65 17.35 16.8 17.5L18.3 19Q18.45 19.15 18.65 19.15Q18.85 19.15 19 19Q19.15 18.85 19.15 18.65Q19.15 18.45 19 18.3ZM10 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6V10.3Q18.575 10.175 18.012 10.087Q17.45 10 17 10Q16.55 10 15.988 10.075Q15.425 10.15 15 10.275V9Q15 8.575 14.713 8.287Q14.425 8 14 8Q13.575 8 13.288 8.287Q13 8.575 13 9V11.25Q12.45 11.65 11.9 12.237Q11.35 12.825 11 13.4V9Q11 8.575 10.713 8.287Q10.425 8 10 8Q9.575 8 9.288 8.287Q9 8.575 9 9V16Q9 16.425 9.288 16.712Q9.575 17 10 17Q10 17.975 10.35 19.087Q10.7 20.2 11.25 21H7Q6.175 21 5.588 20.413Q5 19.825 5 19V6Q4.575 6 4.287 5.713Q4 5.425 4 5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9 3.575 9.288 3.287Q9.575 3 10 3Z"/>
    </Icon>
  );
});

export default IconMaterialAutoDeleteRoundedFilled;