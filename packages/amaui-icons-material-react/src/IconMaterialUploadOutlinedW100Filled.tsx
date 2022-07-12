import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadOutlinedW100Filled'
      short_name='Upload'

      {...props}
    >
      <path d="M11.65 15V6.2L9.4 8.45L8.9 7.95L12 4.85L15.1 7.95L14.6 8.45L12.35 6.2V15ZM6.8 18.7Q6.15 18.7 5.725 18.275Q5.3 17.85 5.3 17.2V15H6V17.2Q6 17.5 6.25 17.75Q6.5 18 6.8 18H17.2Q17.5 18 17.75 17.75Q18 17.5 18 17.2V15H18.7V17.2Q18.7 17.85 18.275 18.275Q17.85 18.7 17.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialUploadOutlinedW100Filled;
