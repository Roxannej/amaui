import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoOutlinedW700'
      short_name='Redo'

      {...props}
    >
      <path d="M9.775 19.575Q7.125 19.575 5.213 17.825Q3.3 16.075 3.3 13.5Q3.3 10.925 5.213 9.175Q7.125 7.425 9.775 7.425H14.7L12.675 5.4L14.875 3.2L20.7 9L14.875 14.8L12.675 12.6L14.7 10.575H9.775Q8.425 10.575 7.438 11.4Q6.45 12.225 6.45 13.5Q6.45 14.775 7.438 15.6Q8.425 16.425 9.775 16.425H17.45V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialRedoOutlinedW700;
