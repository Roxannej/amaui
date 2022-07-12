import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutgoingMailTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailTwoTone'
      short_name='OutgoingMail'

      {...props}
    >
      <path d="M19 21.7 16.9 19.6 17.95 18.5H14.5V15.475H17.95L16.9 14.4L19 12.275L23.725 17ZM4.525 19.5Q3.275 19.5 2.388 18.613Q1.5 17.725 1.5 16.475V7.5Q1.5 6.275 2.388 5.375Q3.275 4.475 4.525 4.475H16.5Q17.725 4.475 18.625 5.375Q19.525 6.275 19.525 7.5V10.6H16.5V9.375L10.4 13.625L4.525 9.4V16.475Q4.525 16.475 4.525 16.475Q4.525 16.475 4.525 16.475H12.625V19.5ZM7.025 7.5 10.4 9.925 13.85 7.5Z"/>
    </Icon>
  )
});

export default IconMaterialOutgoingMailTwoTone;
