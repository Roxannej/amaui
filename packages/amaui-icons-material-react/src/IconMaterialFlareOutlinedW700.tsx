import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlareOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlareOutlinedW700'
      short_name='Flare'

      {...props}
    >
      <path d="M0.225 13.375V10.625H7V13.375ZM7.475 9.425 4.85 6.775 6.775 4.85 9.425 7.475ZM10.625 7V0.225H13.375V7ZM16.525 9.425 14.575 7.475 17.225 4.85 19.15 6.775ZM17 13.375V10.625H23.775V13.375ZM12 15.375Q10.6 15.375 9.613 14.387Q8.625 13.4 8.625 12Q8.625 10.6 9.613 9.613Q10.6 8.625 12 8.625Q13.4 8.625 14.387 9.613Q15.375 10.6 15.375 12Q15.375 13.4 14.387 14.387Q13.4 15.375 12 15.375ZM17.225 19.15 14.575 16.525 16.525 14.575 19.15 17.225ZM6.775 19.15 4.85 17.225 7.475 14.575 9.425 16.525ZM10.625 23.775V17H13.375V23.775Z"/>
    </Icon>
  )
});

export default IconMaterialFlareOutlinedW700;