import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorStatusTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatusTwoTone'
      short_name='DetectorStatus'

      {...props}
    >
      <path d="M10.95 21.725 6.675 17.45l2.15-2.125 2.125 2.1 4.225-4.25 2.175 2.175ZM8.35 9.1h7.325l.3-1.125h-7.95L8.35 9.1Zm0 3.025q-1.075 0-1.9-.65t-1.05-1.7l-.425-1.8h-.55q-1.25 0-2.137-.888Q1.4 6.2 1.4 4.95V.8h21.2v4.15q0 1.25-.887 2.137-.888.888-2.138.888h-.525L18.6 9.8q-.275 1.025-1.088 1.675-.812.65-1.887.65Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorStatusTwoTone;