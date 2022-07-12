import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudCircleOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudCircleOutlined'
      short_name='CloudCircle'

      {...props}
    >
      <path d="M8.5 16H16Q17.25 16 18.125 15.125Q19 14.25 19 13Q19 11.75 18.125 10.875Q17.25 10 16 10Q15.8 8.55 14.675 7.525Q13.55 6.5 12.15 6.5Q10.875 6.5 9.838 7.15Q8.8 7.8 8.3 9Q6.875 9.125 5.938 10.087Q5 11.05 5 12.5Q5 13.95 6.025 14.975Q7.05 16 8.5 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20ZM8.5 14Q7.875 14 7.438 13.562Q7 13.125 7 12.5Q7 11.875 7.438 11.438Q7.875 11 8.5 11H10V10.5Q10 9.675 10.588 9.087Q11.175 8.5 12 8.5Q12.825 8.5 13.413 9.087Q14 9.675 14 10.5V12H16Q16.425 12 16.712 12.287Q17 12.575 17 13Q17 13.425 16.712 13.712Q16.425 14 16 14ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialCloudCircleOutlined;