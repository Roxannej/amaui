import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachmentOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentOutlinedFilled'
      short_name='Attachment'

      {...props}
    >
      <path d="M7.5 17.5Q5.2 17.5 3.6 15.9Q2 14.3 2 12Q2 9.7 3.6 8.1Q5.2 6.5 7.5 6.5H18Q19.65 6.5 20.825 7.675Q22 8.85 22 10.5Q22 12.15 20.825 13.325Q19.65 14.5 18 14.5H8.5Q7.45 14.5 6.725 13.775Q6 13.05 6 12Q6 10.95 6.725 10.225Q7.45 9.5 8.5 9.5H18V11H8.5Q8.075 11 7.788 11.287Q7.5 11.575 7.5 12Q7.5 12.425 7.788 12.712Q8.075 13 8.5 13H18Q19.05 13 19.775 12.275Q20.5 11.55 20.5 10.5Q20.5 9.45 19.775 8.725Q19.05 8 18 8H7.5Q5.85 8 4.675 9.175Q3.5 10.35 3.5 12Q3.5 13.65 4.675 14.825Q5.85 16 7.5 16H18V17.5Z"/>
    </Icon>
  )
});

export default IconMaterialAttachmentOutlinedFilled;
