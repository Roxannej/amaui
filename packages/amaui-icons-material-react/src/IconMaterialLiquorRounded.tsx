import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiquorRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorRounded'
      short_name='Liquor'

      {...props}
    >
      <path d="M4 22Q3.575 22 3.288 21.712Q3 21.425 3 21Q3 20.575 3.288 20.288Q3.575 20 4 20H5V16.8Q4.125 16.5 3.562 15.738Q3 14.975 3 14V7Q3 6.575 3.288 6.287Q3.575 6 4 6H8Q8.425 6 8.713 6.287Q9 6.575 9 7V14Q9 14.975 8.438 15.738Q7.875 16.5 7 16.8V20H8Q8.425 20 8.713 20.288Q9 20.575 9 21Q9 21.425 8.713 21.712Q8.425 22 8 22ZM5 11H7V8H5ZM6 15Q6.425 15 6.713 14.712Q7 14.425 7 14V13H5V14Q5 14.425 5.287 14.712Q5.575 15 6 15ZM13 22Q12.175 22 11.588 21.413Q11 20.825 11 20V10.45Q11 9.8 11.375 9.287Q11.75 8.775 12.35 8.55L13.3 8.2Q13.65 8.075 13.825 7.837Q14 7.6 14 7.25V3Q14 2.575 14.288 2.287Q14.575 2 15 2H18Q18.425 2 18.712 2.287Q19 2.575 19 3V7.25Q19 7.6 19.175 7.837Q19.35 8.075 19.7 8.2L20.65 8.55Q21.25 8.775 21.625 9.287Q22 9.8 22 10.45V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM16 5H17V4H16ZM13 12H20V10.45L19.05 10.1Q18.1 9.75 17.55 9Q17 8.25 17 7.3V7H16V7.3Q16 8.25 15.45 9Q14.9 9.75 13.95 10.1L13 10.45ZM13 20H20V18H13ZM13 16H20V14H13ZM6 15Q6 15 6 15Q6 15 6 15Q6 15 6 15Q6 15 6 15ZM13 16V14V16Z"/>
    </Icon>
  )
});

export default IconMaterialLiquorRounded;
