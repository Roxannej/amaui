import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapOutlinedW700'
      short_name='Map'

      {...props}
    >
      <path d="M15 21.875 9 19.775 4.65 21.5Q3.75 21.85 2.95 21.3Q2.15 20.75 2.15 19.75V5.75Q2.15 5.15 2.5 4.675Q2.85 4.2 3.425 4L9 2.125L15 4.225L19.35 2.5Q20.25 2.15 21.05 2.7Q21.85 3.25 21.85 4.25V18.25Q21.85 18.85 21.5 19.325Q21.15 19.8 20.575 20ZM14 18.2V7.2L10 5.8V16.8ZM16 18.2 18.7 17.325V6.15L16 7.2ZM5.3 17.85 8 16.8V5.8L5.3 6.675ZM16 7.2V18.2ZM8 5.8V16.8Z"/>
    </Icon>
  )
});

export default IconMaterialMapOutlinedW700;
