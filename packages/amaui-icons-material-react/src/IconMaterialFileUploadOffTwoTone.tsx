import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileUploadOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadOffTwoTone'
      short_name='FileUploadOff'

      {...props}
    >
      <path d="m12 1.9 6 6-2.125 2.1-2.35-2.375V9.95L10.5 6.925v-.4l-.2.2L8.75 5.15Zm-9.8-.125 20 20-1.575 1.6-2.15-2.125q-.1.025-.187.012-.088-.012-.188-.012H5.6q-1.275 0-2.15-.875t-.875-2.15V13.75H5.6v4.475h9.875L.625 3.375Zm8.3 13.45v-5.15l3.025 3.025v2.125Z"/>
    </Icon>
  )
});

export default IconMaterialFileUploadOffTwoTone;
