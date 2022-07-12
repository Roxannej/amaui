import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kOutlinedW100Filled'
      short_name='1k'

      {...props}
    >
      <path d="M12.7 14.6H13.4V12.2L15.85 14.6H16.9L14.15 11.95L16.9 9.4H15.9L13.4 11.75V9.4H12.7ZM8.9 14.6H9.6V9.4H7.4V10.1H8.9ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterial1kOutlinedW100Filled;