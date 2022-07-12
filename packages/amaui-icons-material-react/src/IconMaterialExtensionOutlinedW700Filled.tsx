import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOutlinedW700Filled'
      short_name='Extension'

      {...props}
    >
      <path d="M9.25 21.85H5Q3.825 21.85 2.987 21.013Q2.15 20.175 2.15 19V14.75Q3.1 14.75 3.75 14.1Q4.4 13.45 4.4 12.5Q4.4 11.55 3.75 10.9Q3.1 10.25 2.15 10.25V6Q2.15 4.825 2.987 3.987Q3.825 3.15 5 3.15H8.275Q8.55 1.95 9.45 1.212Q10.35 0.475 11.5 0.475Q12.65 0.475 13.55 1.212Q14.45 1.95 14.725 3.15H18Q19.175 3.15 20.013 3.987Q20.85 4.825 20.85 6V9.275Q22.05 9.55 22.788 10.45Q23.525 11.35 23.525 12.5Q23.525 13.65 22.788 14.55Q22.05 15.45 20.85 15.725V19Q20.85 20.175 20.013 21.013Q19.175 21.85 18 21.85H13.75Q13.75 20.75 13.1 19.988Q12.45 19.225 11.5 19.225Q10.575 19.225 9.913 19.988Q9.25 20.75 9.25 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialExtensionOutlinedW700Filled;