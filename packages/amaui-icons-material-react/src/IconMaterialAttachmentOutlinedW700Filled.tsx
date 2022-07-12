import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachmentOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentOutlinedW700Filled'
      short_name='Attachment'

      {...props}
    >
      <path d="M7.375 18.725Q4.675 18.725 2.8 16.85Q0.925 14.975 0.925 12.275Q0.925 9.575 2.8 7.688Q4.675 5.8 7.375 5.8H18.275Q20.25 5.8 21.638 7.2Q23.025 8.6 23.025 10.575Q23.025 12.55 21.638 13.95Q20.25 15.35 18.275 15.35H8.575Q7.3 15.35 6.4 14.45Q5.5 13.55 5.5 12.275Q5.5 11 6.4 10.1Q7.3 9.2 8.575 9.2H18.275V11.45H8.575Q8.225 11.45 8 11.688Q7.775 11.925 7.775 12.275Q7.775 12.625 8 12.85Q8.225 13.075 8.575 13.075H18.275Q19.325 13.075 20.05 12.35Q20.775 11.625 20.775 10.575Q20.775 9.525 20.05 8.8Q19.325 8.075 18.275 8.075H7.375Q5.625 8.075 4.412 9.3Q3.2 10.525 3.2 12.275Q3.2 14.025 4.412 15.237Q5.625 16.45 7.375 16.45H18.275V18.725Z"/>
    </Icon>
  )
});

export default IconMaterialAttachmentOutlinedW700Filled;