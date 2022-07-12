import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapSharpW700'
      short_name='Map'

      {...props}
    >
      <path d="M15 21.875 9 19.775 2.15 22.5V4.425L9 2.125L15 4.225L21.85 1.5V19.575ZM14 18.2V7.2L10 5.8V16.8ZM16 18.2 18.7 17.325V6.15L16 7.2ZM5.3 17.85 8 16.8V5.8L5.3 6.675ZM16 7.2V18.2ZM8 5.8V16.8Z"/>
    </Icon>
  )
});

export default IconMaterialMapSharpW700;
