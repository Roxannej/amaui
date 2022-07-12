import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchSharpW700'
      short_name='Church'

      {...props}
    >
      <path d="M1.425 23.525V14.375L5.425 12.6V9.4L10.425 6.9V5.375H8.425V2.225H10.425V0.225H13.575V2.225H15.575V5.375H13.575V6.9L18.575 9.4V12.6L22.575 14.375V23.525H12.8V18.35H11.2V23.525ZM4.575 20.375H8.05V15.125H15.95V20.375H19.425V16.325L15.425 14.525V11.15L12 9.425L8.575 11.15V14.525L4.575 16.325ZM12 14.275Q12.625 14.275 13.062 13.837Q13.5 13.4 13.5 12.775Q13.5 12.15 13.062 11.712Q12.625 11.275 12 11.275Q11.375 11.275 10.938 11.712Q10.5 12.15 10.5 12.775Q10.5 13.4 10.938 13.837Q11.375 14.275 12 14.275ZM12 14.9Z"/>
    </Icon>
  )
});

export default IconMaterialChurchSharpW700;
