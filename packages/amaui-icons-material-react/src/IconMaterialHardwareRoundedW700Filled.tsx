import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareRoundedW700Filled'
      short_name='Hardware'

      {...props}
    >
      <path d="M9.725 22.225Q9.075 22.225 8.613 21.763Q8.15 21.3 8.15 20.65V13.575H15.85V20.65Q15.85 21.3 15.388 21.763Q14.925 22.225 14.275 22.225ZM19.6 11.45Q19.3 11.45 18.913 11.3Q18.525 11.15 18.325 10.95L15.85 8.45V10.425H8.15V8.85H3.15Q3.15 5.9 5.213 3.837Q7.275 1.775 10.225 1.775H12.7Q14 1.775 14.913 2.562Q15.825 3.35 15.85 4.55V4.775L18.325 2.3Q18.525 2.1 18.9 1.937Q19.275 1.775 19.6 1.775Q20.1 1.775 20.475 2.15Q20.85 2.525 20.85 3.025V10.225Q20.85 10.725 20.488 11.087Q20.125 11.45 19.6 11.45Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareRoundedW700Filled;
