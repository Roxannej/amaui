import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearNightOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearNightOutlinedW700Filled'
      short_name='ClearNight'

      {...props}
    >
      <path d="M11.925 19.775q1.2 0 2.275-.337 1.075-.338 2.125-1.063-1.9-.675-3.5-1.9-1.6-1.225-2.675-2.938-1.075-1.712-1.487-3.849-.413-2.138.062-4.613-2.2 1.1-3.362 2.95Q4.2 9.875 4.2 12q0 3.35 2.188 5.562 2.187 2.213 5.537 2.213Zm0 3.15q-2.325 0-4.325-.838-2-.837-3.45-2.299-1.45-1.463-2.275-3.463T1.05 12q0-4.5 2.838-7.288 2.837-2.787 6.987-3.362 1-.125 1.437.512.438.638.063 1.688-.825 2.3-.712 4.362.112 2.063 1.05 3.713.937 1.65 2.65 2.775 1.712 1.125 4.087 1.575 1.1.2 1.463.913.362.712-.238 1.512-1.65 2.2-3.887 3.363-2.238 1.162-4.863 1.162Z"/>
    </Icon>
  )
});

export default IconMaterialClearNightOutlinedW700Filled;