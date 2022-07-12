import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrongLocationOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationOutlinedW100Filled'
      short_name='WrongLocation'

      {...props}
    >
      <path d="M15.75 7.75 15.25 7.25 17.35 5.15 15.25 3.05 15.75 2.55 17.85 4.65 19.95 2.55 20.45 3.05 18.35 5.15 20.45 7.25 19.95 7.75 17.85 5.65ZM12 11.35Q12.575 11.35 12.963 10.962Q13.35 10.575 13.35 10Q13.35 9.425 12.963 9.037Q12.575 8.65 12 8.65Q11.425 8.65 11.038 9.037Q10.65 9.425 10.65 10Q10.65 10.575 11.038 10.962Q11.425 11.35 12 11.35ZM12 21.5Q8.275 18.15 6.463 15.287Q4.65 12.425 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q12.575 2.65 13.15 2.737Q13.725 2.825 14.25 3V8.75H19.225Q19.275 9.1 19.312 9.475Q19.35 9.85 19.35 10.2Q19.35 12.425 17.538 15.287Q15.725 18.15 12 21.5Z"/>
    </Icon>
  )
});

export default IconMaterialWrongLocationOutlinedW100Filled;