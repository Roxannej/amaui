import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorTwoTone'
      short_name='Detector'

      {...props}
    >
      <path d="M12 21.75q-2.325 0-4.412-.938-2.088-.937-3.713-2.562l1.8-1.775q1.25 1.275 2.887 2.013 1.638.737 3.438.737 1.8 0 3.45-.725 1.65-.725 2.925-2l1.775 1.75q-1.625 1.625-3.725 2.562-2.1.938-4.425.938Zm0-4.65q-1.4 0-2.675-.525t-2.3-1.45l1.775-1.8q.675.55 1.5.9t1.7.35q.875 0 1.688-.338.812-.337 1.512-.887l1.8 1.775q-1.025.925-2.312 1.45Q13.4 17.1 12 17.1Zm-3.65-8h7.325l.3-1.125h-7.95L8.35 9.1Zm0 3.025q-1.075 0-1.9-.65t-1.05-1.7l-.425-1.8h-.55q-1.25 0-2.137-.888Q1.4 6.2 1.4 4.95V.8h21.2v4.15q0 1.25-.887 2.137-.888.888-2.138.888h-.525L18.6 9.8q-.275 1.025-1.088 1.675-.812.65-1.887.65Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorTwoTone;
