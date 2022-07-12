import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettopComponentTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentTwoTone'
      short_name='SettopComponent'

      {...props}
    >
      <path d="M1.225 17.875V6.1h21.55v11.775Zm4.6-4.75h6.2V10.85h-6.2Zm8.625-.2q.375 0 .65-.275t.275-.65q0-.4-.275-.675t-.65-.275q-.4 0-.675.275T13.5 12q0 .375.275.65t.675.275Zm2.8 0q.4 0 .675-.275T18.2 12q0-.4-.275-.675t-.675-.275q-.375 0-.65.275t-.275.675q0 .375.275.65t.65.275Z"/>
    </Icon>
  )
});

export default IconMaterialSettopComponentTwoTone;
