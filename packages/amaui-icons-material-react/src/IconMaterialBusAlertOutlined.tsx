import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusAlertOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusAlertOutlined'
      short_name='BusAlert'

      {...props}
    >
      <path d="M6.5 17Q7.125 17 7.562 16.562Q8 16.125 8 15.5Q8 14.875 7.562 14.438Q7.125 14 6.5 14Q5.875 14 5.438 14.438Q5 14.875 5 15.5Q5 16.125 5.438 16.562Q5.875 17 6.5 17ZM13.5 17Q14.125 17 14.562 16.562Q15 16.125 15 15.5Q15 14.875 14.562 14.438Q14.125 14 13.5 14Q12.875 14 12.438 14.438Q12 14.875 12 15.5Q12 16.125 12.438 16.562Q12.875 17 13.5 17ZM4 22Q3.575 22 3.288 21.712Q3 21.425 3 21V18.95Q2.55 18.45 2.275 17.837Q2 17.225 2 16.5V7Q2 6.25 2.288 5.487Q2.575 4.725 3.562 4.125Q4.55 3.525 6.475 3.212Q8.4 2.9 11.65 3.05Q11.45 3.525 11.312 4.012Q11.175 4.5 11.1 5Q8.3 4.925 6.675 5.2Q5.05 5.475 4.45 6H11Q11 6.5 11.075 7Q11.15 7.5 11.3 8H4V11H13.1Q14.05 11.95 15.312 12.475Q16.575 13 18 13V16.5Q18 17.225 17.725 17.837Q17.45 18.45 17 18.95V21Q17 21.425 16.712 21.712Q16.425 22 16 22H15Q14.575 22 14.288 21.712Q14 21.425 14 21V20H6V21Q6 21.425 5.713 21.712Q5.425 22 5 22ZM14 13H6Q5.175 13 4.588 13Q4 13 4 13H16Q16 13 15.413 13Q14.825 13 14 13ZM18 11Q15.925 11 14.463 9.537Q13 8.075 13 6Q13 3.925 14.463 2.462Q15.925 1 18 1Q20.075 1 21.538 2.462Q23 3.925 23 6Q23 8.075 21.538 9.537Q20.075 11 18 11ZM17.5 7H18.5V3H17.5ZM18 9Q18.2 9 18.35 8.85Q18.5 8.7 18.5 8.5Q18.5 8.3 18.35 8.15Q18.2 8 18 8Q17.8 8 17.65 8.15Q17.5 8.3 17.5 8.5Q17.5 8.7 17.65 8.85Q17.8 9 18 9ZM6 18H14Q14.825 18 15.413 17.413Q16 16.825 16 16V13H4V16Q4 16.825 4.588 17.413Q5.175 18 6 18ZM11 6Q11 6 11 6Q11 6 11 6H4.45Q5.05 6 6.663 6Q8.275 6 11 6Z"/>
    </Icon>
  )
});

export default IconMaterialBusAlertOutlined;