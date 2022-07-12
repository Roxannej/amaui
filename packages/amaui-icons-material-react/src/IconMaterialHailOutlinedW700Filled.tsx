import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHailOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailOutlinedW700Filled'
      short_name='Hail'

      {...props}
    >
      <path d="M12.025 5.625Q11.025 5.625 10.325 4.912Q9.625 4.2 9.625 3.225Q9.625 2.225 10.325 1.537Q11.025 0.85 12 0.85Q13 0.85 13.688 1.537Q14.375 2.225 14.375 3.225Q14.375 4.2 13.688 4.912Q13 5.625 12.025 5.625ZM8.625 22.375V10.75Q7.9 11.325 7.638 12.412Q7.375 13.5 7.375 14.775H4.625Q4.625 10.6 6.6 8.613Q8.575 6.625 12 6.625Q14.275 6.625 15.45 5.387Q16.625 4.15 16.625 1.625H19.375Q19.375 4.025 18.413 5.937Q17.45 7.85 15.375 8.675V22.375H12.625V16.375H11.375V22.375ZM3.625 22.375V16.375H7.375V22.375Z"/>
    </Icon>
  )
});

export default IconMaterialHailOutlinedW700Filled;
