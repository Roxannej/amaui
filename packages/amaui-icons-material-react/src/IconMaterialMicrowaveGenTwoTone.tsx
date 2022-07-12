import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicrowaveGenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGenTwoTone'
      short_name='MicrowaveGen'

      {...props}
    >
      <path d="M4.425 20.625q-1.275 0-2.15-.875T1.4 17.6V6.375q0-1.25.875-2.138.875-.887 2.15-.887H19.6q1.25 0 2.138.887.887.888.887 2.138V17.6q0 1.275-.887 2.15-.888.875-2.138.875Zm.95-4h9.275V7.35H5.375Zm12.075 0q.475 0 .838-.363.362-.362.362-.812 0-.475-.375-.837-.375-.363-.825-.363-.45 0-.812.363-.363.362-.363.837 0 .525.363.85.362.325.812.325Zm-9.7-2.375V9.725h4.525v4.525Zm9.7-1.075q.475 0 .838-.325.362-.325.362-.85 0-.55-.375-.875-.375-.325-.825-.325-.45 0-.812.337-.363.338-.363.863 0 .525.363.85.362.325.812.325Zm0-3.45q.475 0 .838-.325.362-.325.362-.85 0-.55-.375-.875-.375-.325-.825-.325-.45 0-.812.337-.363.338-.363.863 0 .525.363.85.362.325.812.325Z"/>
    </Icon>
  )
});

export default IconMaterialMicrowaveGenTwoTone;
