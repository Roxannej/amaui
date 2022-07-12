import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataObjectOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectOutlinedFilled'
      short_name='DataObject'

      {...props}
    >
      <path d="M14 20V18H17Q17.425 18 17.712 17.712Q18 17.425 18 17V15Q18 14.05 18.55 13.275Q19.1 12.5 20 12.175V11.825Q19.1 11.5 18.55 10.725Q18 9.95 18 9V7Q18 6.575 17.712 6.287Q17.425 6 17 6H14V4H17Q18.25 4 19.125 4.875Q20 5.75 20 7V9Q20 9.425 20.288 9.712Q20.575 10 21 10H22V14H21Q20.575 14 20.288 14.287Q20 14.575 20 15V17Q20 18.25 19.125 19.125Q18.25 20 17 20ZM7 20Q5.75 20 4.875 19.125Q4 18.25 4 17V15Q4 14.575 3.713 14.287Q3.425 14 3 14H2V10H3Q3.425 10 3.713 9.712Q4 9.425 4 9V7Q4 5.75 4.875 4.875Q5.75 4 7 4H10V6H7Q6.575 6 6.287 6.287Q6 6.575 6 7V9Q6 9.95 5.45 10.725Q4.9 11.5 4 11.825V12.175Q4.9 12.5 5.45 13.275Q6 14.05 6 15V17Q6 17.425 6.287 17.712Q6.575 18 7 18H10V20Z"/>
    </Icon>
  )
});

export default IconMaterialDataObjectOutlinedFilled;
