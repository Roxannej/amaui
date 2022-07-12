import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRoundedW700'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M11.55 17.7Q11.1 17.25 11.1 16.6Q11.1 15.95 11.55 15.5L13.475 13.575H2.5Q1.85 13.575 1.388 13.112Q0.925 12.65 0.925 12Q0.925 11.35 1.388 10.887Q1.85 10.425 2.5 10.425H13.475L11.55 8.5Q11.1 8.05 11.1 7.4Q11.1 6.75 11.55 6.3Q12 5.85 12.663 5.85Q13.325 5.85 13.775 6.3L18.375 10.9Q18.6 11.125 18.7 11.412Q18.8 11.7 18.8 12Q18.8 12.3 18.7 12.587Q18.6 12.875 18.375 13.1L13.775 17.7Q13.325 18.15 12.663 18.15Q12 18.15 11.55 17.7ZM22.05 18.8Q21.4 18.8 20.938 18.337Q20.475 17.875 20.475 17.225V6.775Q20.475 6.125 20.938 5.662Q21.4 5.2 22.05 5.2Q22.7 5.2 23.163 5.662Q23.625 6.125 23.625 6.775V17.225Q23.625 17.875 23.163 18.337Q22.7 18.8 22.05 18.8Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardTabRoundedW700;