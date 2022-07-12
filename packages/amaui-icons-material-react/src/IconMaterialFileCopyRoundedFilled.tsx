import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyRoundedFilled'
      short_name='FileCopy'

      {...props}
    >
      <path d="M19 19H8Q7.175 19 6.588 18.413Q6 17.825 6 17V3Q6 2.175 6.588 1.587Q7.175 1 8 1H14.175Q14.575 1 14.938 1.15Q15.3 1.3 15.575 1.575L20.425 6.425Q20.7 6.7 20.85 7.062Q21 7.425 21 7.825V17Q21 17.825 20.413 18.413Q19.825 19 19 19ZM4 23Q3.175 23 2.588 22.413Q2 21.825 2 21V8Q2 7.575 2.288 7.287Q2.575 7 3 7Q3.425 7 3.713 7.287Q4 7.575 4 8V21Q4 21 4 21Q4 21 4 21H14Q14.425 21 14.713 21.288Q15 21.575 15 22Q15 22.425 14.713 22.712Q14.425 23 14 23ZM15 8H19L14 3V7Q14 7.425 14.288 7.713Q14.575 8 15 8Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopyRoundedFilled;
