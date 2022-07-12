import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableTwoTone'
      short_name='Table'

      {...props}
    >
      <path d="M2.375 21.625V2.375H21.625V21.625ZM5.4 8.35H18.6V5.4H5.4ZM10.425 13.5H13.575V10.225H10.425ZM10.425 18.6H13.575V15.375H10.425ZM5.4 13.5H8.55V10.225H5.4ZM15.45 13.5H18.6V10.225H15.45ZM5.4 18.6H8.55V15.375H5.4ZM15.45 18.6H18.6V15.375H15.45Z"/>
    </Icon>
  )
});

export default IconMaterialTableTwoTone;