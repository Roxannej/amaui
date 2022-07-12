import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyOutlinedW700Filled'
      short_name='Reply'

      {...props}
    >
      <path d="M18.55 19.575V15Q18.55 13.975 17.85 13.275Q17.15 12.575 16.125 12.575H8.3L11.325 15.6L9.125 17.8L2.3 11L9.125 4.2L11.325 6.4L8.3 9.425H16.125Q18.45 9.425 20.075 11.05Q21.7 12.675 21.7 15V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialReplyOutlinedW700Filled;