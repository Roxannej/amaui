import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchOutlinedW100'
      short_name='Church'

      {...props}
    >
      <path d="M2.65 21.35V14.3L6.65 12.525V9.2L11.65 6.675V4.15H9.65V3.45H11.65V1.45H12.35V3.45H14.35V4.15H12.35V6.675L17.35 9.2V12.525L21.35 14.3V21.35H13.65V17.9Q13.65 17.225 13.163 16.738Q12.675 16.25 12 16.25Q11.325 16.25 10.838 16.738Q10.35 17.225 10.35 17.9V21.35ZM3.35 20.65H9.65V17.9Q9.65 16.925 10.338 16.238Q11.025 15.55 12 15.55Q12.975 15.55 13.663 16.238Q14.35 16.925 14.35 17.9V20.65H20.65V14.775L16.65 12.975V9.65L12 7.275L7.35 9.65V12.975L3.35 14.775ZM12 13Q12.425 13 12.713 12.712Q13 12.425 13 12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM12 13.95Q12 13.95 12 13.95Q12 13.95 12 13.95Q12 13.95 12 13.95Q12 13.95 12 13.95Z"/>
    </Icon>
  )
});

export default IconMaterialChurchOutlinedW100;