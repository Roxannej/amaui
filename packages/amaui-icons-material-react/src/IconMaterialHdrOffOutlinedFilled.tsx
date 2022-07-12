import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffOutlinedFilled'
      short_name='HdrOff'

      {...props}
    >
      <path d="M19.8 22.6 1.4 4.2 2.8 2.8 21.2 21.15ZM19.5 15 18.6 13H17.5V14.65L16 13.15V9H19.5Q20.1 9 20.55 9.45Q21 9.9 21 10.5V11.5Q21 11.95 20.738 12.312Q20.475 12.675 20.1 12.9L21 15ZM17.5 11.5H19.5Q19.5 11.5 19.5 11.5Q19.5 11.5 19.5 11.5V10.5Q19.5 10.5 19.5 10.5Q19.5 10.5 19.5 10.5H17.5ZM14.5 11.65 11.85 9H13Q13.6 9 14.05 9.45Q14.5 9.9 14.5 10.5ZM3 15V9H4.5V11H6.5V9H8V15H6.5V12.5H4.5V15ZM9.5 10.9 11 12.4V13.5H12.125Q12.125 13.5 12.125 13.5Q12.125 13.5 12.125 13.5L13.5 14.9Q13.375 14.95 13.25 14.975Q13.125 15 13 15H9.5Z"/>
    </Icon>
  )
});

export default IconMaterialHdrOffOutlinedFilled;
