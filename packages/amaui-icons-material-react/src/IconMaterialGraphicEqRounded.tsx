import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGraphicEqRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqRounded'
      short_name='GraphicEq'

      {...props}
    >
      <path d="M8 18Q7.575 18 7.287 17.712Q7 17.425 7 17V7Q7 6.575 7.287 6.287Q7.575 6 8 6Q8.425 6 8.713 6.287Q9 6.575 9 7V17Q9 17.425 8.713 17.712Q8.425 18 8 18ZM12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V3Q11 2.575 11.288 2.287Q11.575 2 12 2Q12.425 2 12.713 2.287Q13 2.575 13 3V21Q13 21.425 12.713 21.712Q12.425 22 12 22ZM4 14Q3.575 14 3.288 13.712Q3 13.425 3 13V11Q3 10.575 3.288 10.287Q3.575 10 4 10Q4.425 10 4.713 10.287Q5 10.575 5 11V13Q5 13.425 4.713 13.712Q4.425 14 4 14ZM16 18Q15.575 18 15.288 17.712Q15 17.425 15 17V7Q15 6.575 15.288 6.287Q15.575 6 16 6Q16.425 6 16.712 6.287Q17 6.575 17 7V17Q17 17.425 16.712 17.712Q16.425 18 16 18ZM20 14Q19.575 14 19.288 13.712Q19 13.425 19 13V11Q19 10.575 19.288 10.287Q19.575 10 20 10Q20.425 10 20.712 10.287Q21 10.575 21 11V13Q21 13.425 20.712 13.712Q20.425 14 20 14Z"/>
    </Icon>
  )
});

export default IconMaterialGraphicEqRounded;
