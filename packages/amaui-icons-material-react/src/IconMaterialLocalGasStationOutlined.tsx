import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalGasStationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationOutlined'
      short_name='LocalGasStation'

      {...props}
    >
      <path d="M4 21V5Q4 4.175 4.588 3.587Q5.175 3 6 3H12Q12.825 3 13.413 3.587Q14 4.175 14 5V12H15Q15.825 12 16.413 12.587Q17 13.175 17 14V18.5Q17 18.925 17.288 19.212Q17.575 19.5 18 19.5Q18.425 19.5 18.712 19.212Q19 18.925 19 18.5V11.3Q18.775 11.425 18.525 11.462Q18.275 11.5 18 11.5Q16.95 11.5 16.225 10.775Q15.5 10.05 15.5 9Q15.5 8.2 15.938 7.562Q16.375 6.925 17.1 6.65L15 4.55L16.05 3.5L19.75 7.1Q20.125 7.475 20.312 7.975Q20.5 8.475 20.5 9V18.5Q20.5 19.55 19.775 20.275Q19.05 21 18 21Q16.95 21 16.225 20.275Q15.5 19.55 15.5 18.5V13.5Q15.5 13.5 15.5 13.5Q15.5 13.5 15.5 13.5H14V21ZM6 10H12V5Q12 5 12 5Q12 5 12 5H6Q6 5 6 5Q6 5 6 5ZM18 10Q18.425 10 18.712 9.712Q19 9.425 19 9Q19 8.575 18.712 8.287Q18.425 8 18 8Q17.575 8 17.288 8.287Q17 8.575 17 9Q17 9.425 17.288 9.712Q17.575 10 18 10ZM6 19H12ZM6 19H12V12H6Z"/>
    </Icon>
  )
});

export default IconMaterialLocalGasStationOutlined;
