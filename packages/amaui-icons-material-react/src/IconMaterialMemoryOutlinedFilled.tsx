import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMemoryOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryOutlinedFilled'
      short_name='Memory'

      {...props}
    >
      <path d="M9 15V9H15V15ZM11 13H13V11H11ZM9 21V19H7Q6.175 19 5.588 18.413Q5 17.825 5 17V15H3V13H5V11H3V9H5V7Q5 6.175 5.588 5.588Q6.175 5 7 5H9V3H11V5H13V3H15V5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V9H21V11H19V13H21V15H19V17Q19 17.825 18.413 18.413Q17.825 19 17 19H15V21H13V19H11V21ZM17 17Q17 17 17 17Q17 17 17 17V7Q17 7 17 7Q17 7 17 7H7Q7 7 7 7Q7 7 7 7V17Q7 17 7 17Q7 17 7 17ZM11 13V11H13V13Z"/>
    </Icon>
  )
});

export default IconMaterialMemoryOutlinedFilled;
