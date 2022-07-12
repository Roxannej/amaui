import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerOutlined'
      short_name='CoffeeMaker'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H20V4H18V6Q18 6.425 17.712 6.713Q17.425 7 17 7H9Q8.575 7 8.288 6.713Q8 6.425 8 6V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H10.05Q9.1 19.325 8.55 18.288Q8 17.25 8 16V11H18V16Q18 17.25 17.45 18.288Q16.9 19.325 15.95 20H20V22ZM13 19Q14.25 19 15.125 18.125Q16 17.25 16 16V13H10V16Q10 17.25 10.875 18.125Q11.75 19 13 19ZM13 10Q13.425 10 13.713 9.712Q14 9.425 14 9Q14 8.575 13.713 8.287Q13.425 8 13 8Q12.575 8 12.288 8.287Q12 8.575 12 9Q12 9.425 12.288 9.712Q12.575 10 13 10ZM13 13Q13 13 13 13Q13 13 13 13Q13 13 13 13Q13 13 13 13Z"/>
    </Icon>
  )
});

export default IconMaterialCoffeeMakerOutlined;
