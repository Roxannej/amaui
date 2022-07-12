import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellSharpW700'
      short_name='Doorbell'

      {...props}
    >
      <path d="M12 17.5Q12.425 17.5 12.713 17.212Q13 16.925 13 16.5H11Q11 16.925 11.288 17.212Q11.575 17.5 12 17.5ZM8 16H16V15H15V12.65Q15 11.55 14.4 10.65Q13.8 9.75 12.75 9.5V8.5H11.25V9.5Q10.2 9.75 9.6 10.65Q9 11.55 9 12.65V15H8ZM3.15 21.85V8.575L12 1.925L20.85 8.575V21.85ZM6.3 18.7H17.7V10.15L12 5.875L6.3 10.15ZM12 12.3Z"/>
    </Icon>
  )
});

export default IconMaterialDoorbellSharpW700;
