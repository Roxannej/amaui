import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockOutlined'
      short_name='Dock'

      {...props}
    >
      <path d="M8 23V21H16V23ZM8 19Q7.175 19 6.588 18.413Q6 17.825 6 17V3Q6 2.175 6.588 1.587Q7.175 1 8 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V17Q18 17.825 17.413 18.413Q16.825 19 16 19ZM8 16V17Q8 17 8 17Q8 17 8 17H16Q16 17 16 17Q16 17 16 17V16ZM8 16V17Q8 17 8 17Q8 17 8 17Q8 17 8 17Q8 17 8 17V16ZM8 14H16V6H8ZM8 4H16V3Q16 3 16 3Q16 3 16 3H8Q8 3 8 3Q8 3 8 3ZM8 4V3Q8 3 8 3Q8 3 8 3Q8 3 8 3Q8 3 8 3Z"/>
    </Icon>
  )
});

export default IconMaterialDockOutlined;