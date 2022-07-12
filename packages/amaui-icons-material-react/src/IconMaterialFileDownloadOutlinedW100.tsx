import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOutlinedW100'
      short_name='FileDownload'

      {...props}
    >
      <path d="M12 15 8.9 11.9 9.4 11.4 11.65 13.65V4.85H12.35V13.65L14.6 11.4L15.1 11.9ZM6.8 18.7Q6.15 18.7 5.725 18.275Q5.3 17.85 5.3 17.2V15H6V17.2Q6 17.5 6.25 17.75Q6.5 18 6.8 18H17.2Q17.5 18 17.75 17.75Q18 17.5 18 17.2V15H18.7V17.2Q18.7 17.85 18.275 18.275Q17.85 18.7 17.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialFileDownloadOutlinedW100;
