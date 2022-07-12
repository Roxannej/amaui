import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventNoteOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteOutlinedW700Filled'
      short_name='EventNote'

      {...props}
    >
      <path d="M7 14.225V11.85H17V14.225ZM7 18.15V15.775H14V18.15ZM5.3 22.85Q3.975 22.85 3.062 21.938Q2.15 21.025 2.15 19.7V6.3Q2.15 4.975 3.062 4.062Q3.975 3.15 5.3 3.15H6V1.15H8.575V3.15H15.425V1.15H18V3.15H18.7Q20.025 3.15 20.938 4.062Q21.85 4.975 21.85 6.3V19.7Q21.85 21.025 20.938 21.938Q20.025 22.85 18.7 22.85ZM5.3 19.7H18.7Q18.7 19.7 18.7 19.7Q18.7 19.7 18.7 19.7V10H5.3V19.7Q5.3 19.7 5.3 19.7Q5.3 19.7 5.3 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialEventNoteOutlinedW700Filled;