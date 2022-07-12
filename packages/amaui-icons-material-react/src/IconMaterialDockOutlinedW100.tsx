import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockOutlinedW100'
      short_name='Dock'

      {...props}
    >
      <path d="M8.65 20.9V20.2H15.35V20.9ZM8.8 18.2Q8.15 18.2 7.725 17.775Q7.3 17.35 7.3 16.7V4.3Q7.3 3.65 7.725 3.225Q8.15 2.8 8.8 2.8H15.2Q15.85 2.8 16.275 3.225Q16.7 3.65 16.7 4.3V16.7Q16.7 17.35 16.275 17.775Q15.85 18.2 15.2 18.2ZM8 15.85V16.7Q8 17 8.25 17.25Q8.5 17.5 8.8 17.5H15.2Q15.5 17.5 15.75 17.25Q16 17 16 16.7V15.85ZM8 15.85V16.7Q8 17 8 17.25Q8 17.5 8 17.5Q8 17.5 8 17.25Q8 17 8 16.7V15.85ZM8 15.15H16V5.85H8ZM8 5.15H16V4.3Q16 4 15.75 3.75Q15.5 3.5 15.2 3.5H8.8Q8.5 3.5 8.25 3.75Q8 4 8 4.3ZM8 5.15V4.3Q8 4 8 3.75Q8 3.5 8 3.5Q8 3.5 8 3.75Q8 4 8 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialDockOutlinedW100;
