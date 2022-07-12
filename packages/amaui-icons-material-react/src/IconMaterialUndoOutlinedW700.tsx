import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUndoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoOutlinedW700'
      short_name='Undo'

      {...props}
    >
      <path d="M14.225 19.575H6.55V16.425H14.225Q15.575 16.425 16.562 15.6Q17.55 14.775 17.55 13.5Q17.55 12.225 16.562 11.4Q15.575 10.575 14.225 10.575H9.3L11.325 12.6L9.125 14.8L3.3 9L9.125 3.2L11.325 5.4L9.3 7.425H14.225Q16.875 7.425 18.788 9.175Q20.7 10.925 20.7 13.5Q20.7 16.075 18.788 17.825Q16.875 19.575 14.225 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialUndoOutlinedW700;
