import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionSharpW700Filled'
      short_name='Extension'

      {...props}
    >
      <path d="M9.25 21.85H2.15V14.75Q3.1 14.75 3.75 14.1Q4.4 13.45 4.4 12.5Q4.4 11.55 3.75 10.9Q3.1 10.25 2.15 10.25V3.15H8.275Q8.55 1.95 9.45 1.212Q10.35 0.475 11.5 0.475Q12.65 0.475 13.55 1.212Q14.45 1.95 14.725 3.15H20.85V9.275Q22.05 9.55 22.788 10.45Q23.525 11.35 23.525 12.5Q23.525 13.65 22.788 14.55Q22.05 15.45 20.85 15.725V21.85H13.75Q13.75 20.75 13.1 19.988Q12.45 19.225 11.5 19.225Q10.575 19.225 9.913 19.988Q9.25 20.75 9.25 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialExtensionSharpW700Filled;
