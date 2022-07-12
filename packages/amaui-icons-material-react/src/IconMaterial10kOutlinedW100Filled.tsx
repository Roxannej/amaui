import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kOutlinedW100Filled'
      short_name='10k'

      {...props}
    >
      <path d="M14.6 14.6H15.3V12.2L17.75 14.6H18.8L16.05 11.95L18.8 9.4H17.8L15.3 11.75V9.4H14.6ZM7 14.6H7.7V9.4H5.5V10.1H7ZM10 14.6H12.3Q12.6 14.6 12.8 14.4Q13 14.2 13 13.9V10.1Q13 9.8 12.8 9.6Q12.6 9.4 12.3 9.4H10Q9.7 9.4 9.5 9.6Q9.3 9.8 9.3 10.1V13.9Q9.3 14.2 9.5 14.4Q9.7 14.6 10 14.6ZM10 13.9V10.1H12.3V13.9ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterial10kOutlinedW100Filled;
