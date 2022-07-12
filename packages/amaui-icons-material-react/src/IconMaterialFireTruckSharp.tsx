import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireTruckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireTruckSharp'
      short_name='FireTruck'

      {...props}
    >
      <path d="M7 21Q5.75 21 4.875 20.125Q4 19.25 4 18H1V11H12V5H16V3H19V5H21L23 11V18H20Q20 19.25 19.125 20.125Q18.25 21 17 21Q15.75 21 14.875 20.125Q14 19.25 14 18H10Q10 19.25 9.125 20.125Q8.25 21 7 21ZM7 19Q7.425 19 7.713 18.712Q8 18.425 8 18Q8 17.575 7.713 17.288Q7.425 17 7 17Q6.575 17 6.287 17.288Q6 17.575 6 18Q6 18.425 6.287 18.712Q6.575 19 7 19ZM17 19Q17.425 19 17.712 18.712Q18 18.425 18 18Q18 17.575 17.712 17.288Q17.425 17 17 17Q16.575 17 16.288 17.288Q16 17.575 16 18Q16 18.425 16.288 18.712Q16.575 19 17 19ZM3 13V16H4.775Q5.2 15.525 5.775 15.262Q6.35 15 7 15Q7.65 15 8.225 15.262Q8.8 15.525 9.225 16H12V13ZM14 16H14.775Q15.2 15.525 15.775 15.262Q16.35 15 17 15Q17.65 15 18.225 15.262Q18.8 15.525 19.225 16H21V13H14ZM14 11H20.9L19.55 7H14ZM1 10V8.5H2V6.5H1V5H11V6.5H10V8.5H11V10ZM3.5 8.5H5.25V6.5H3.5ZM6.75 8.5H8.5V6.5H6.75ZM12 13H9.225Q8.8 13 8.225 13Q7.65 13 7 13Q6.35 13 5.775 13Q5.2 13 4.775 13H3ZM14 13H21H19.225Q18.8 13 18.225 13Q17.65 13 17 13Q16.35 13 15.775 13Q15.2 13 14.775 13H14Z"/>
    </Icon>
  )
});

export default IconMaterialFireTruckSharp;
