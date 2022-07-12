import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragHandleRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleRoundedW700Filled'
      short_name='DragHandle'

      {...props}
    >
      <path d="M5 11Q4.35 11 3.888 10.537Q3.425 10.075 3.425 9.425Q3.425 8.775 3.888 8.312Q4.35 7.85 5 7.85H19Q19.65 7.85 20.113 8.312Q20.575 8.775 20.575 9.425Q20.575 10.075 20.113 10.537Q19.65 11 19 11ZM5 16.15Q4.35 16.15 3.888 15.688Q3.425 15.225 3.425 14.575Q3.425 13.925 3.888 13.462Q4.35 13 5 13H19Q19.65 13 20.113 13.462Q20.575 13.925 20.575 14.575Q20.575 15.225 20.113 15.688Q19.65 16.15 19 16.15Z"/>
    </Icon>
  )
});

export default IconMaterialDragHandleRoundedW700Filled;
