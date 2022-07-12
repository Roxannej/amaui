import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3mpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3mpRoundedFilled'
      short_name='3mp'

      {...props}
    >
      <path d="M10.75 11.5H13.5Q13.925 11.5 14.213 11.212Q14.5 10.925 14.5 10.5V6.5Q14.5 6.075 14.213 5.787Q13.925 5.5 13.5 5.5H10.725Q10.425 5.5 10.213 5.713Q10 5.925 10 6.25Q10 6.575 10.213 6.787Q10.425 7 10.75 7H13V8H11.475Q11.275 8 11.137 8.15Q11 8.3 11 8.5Q11 8.7 11.15 8.85Q11.3 9 11.5 9H13V10H10.725Q10.425 10 10.213 10.212Q10 10.425 10 10.75Q10 11.075 10.213 11.287Q10.425 11.5 10.75 11.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6.75 18.5Q7.075 18.5 7.287 18.288Q7.5 18.075 7.5 17.75V14H8.5V16.275Q8.5 16.575 8.713 16.788Q8.925 17 9.25 17Q9.575 17 9.788 16.788Q10 16.575 10 16.25V14H11V17.775Q11 18.075 11.213 18.288Q11.425 18.5 11.75 18.5Q12.075 18.5 12.288 18.288Q12.5 18.075 12.5 17.75V13.5Q12.5 13.075 12.213 12.787Q11.925 12.5 11.5 12.5H7Q6.575 12.5 6.287 12.787Q6 13.075 6 13.5V17.775Q6 18.075 6.213 18.288Q6.425 18.5 6.75 18.5ZM14.25 18.5Q14.575 18.5 14.788 18.288Q15 18.075 15 17.75V17H17Q17.425 17 17.712 16.712Q18 16.425 18 16V13.5Q18 13.075 17.712 12.787Q17.425 12.5 17 12.5H14.5Q14.075 12.5 13.788 12.787Q13.5 13.075 13.5 13.5V17.775Q13.5 18.075 13.713 18.288Q13.925 18.5 14.25 18.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  )
});

export default IconMaterial3mpRoundedFilled;
