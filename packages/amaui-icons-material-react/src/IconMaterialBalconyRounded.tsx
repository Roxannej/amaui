import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBalconyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyRounded'
      short_name='Balcony'

      {...props}
    >
      <path d="M9 12Q8.575 12 8.288 11.712Q8 11.425 8 11Q8 10.575 8.288 10.287Q8.575 10 9 10Q9.425 10 9.713 10.287Q10 10.575 10 11Q10 11.425 9.713 11.712Q9.425 12 9 12ZM15 12Q14.575 12 14.288 11.712Q14 11.425 14 11Q14 10.575 14.288 10.287Q14.575 10 15 10Q15.425 10 15.713 10.287Q16 10.575 16 11Q16 11.425 15.713 11.712Q15.425 12 15 12ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V16Q3 15.5 3.237 15.037Q3.475 14.575 4 14.275V10Q4 8.35 4.625 6.888Q5.25 5.425 6.338 4.338Q7.425 3.25 8.888 2.625Q10.35 2 12 2Q13.65 2 15.113 2.625Q16.575 3.25 17.663 4.338Q18.75 5.425 19.375 6.888Q20 8.35 20 10V14.275Q20.525 14.575 20.763 15.037Q21 15.5 21 16V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 16V20Q5 20 5 20Q5 20 5 20H7V16ZM9 20H11V16H9ZM6 14H11V4.075Q8.85 4.425 7.425 6.087Q6 7.75 6 10ZM13 14H18V10Q18 7.75 16.575 6.087Q15.15 4.425 13 4.075ZM13 20H15V16H13ZM17 20H19Q19 20 19 20Q19 20 19 20V16H17Z"/>
    </Icon>
  )
});

export default IconMaterialBalconyRounded;
