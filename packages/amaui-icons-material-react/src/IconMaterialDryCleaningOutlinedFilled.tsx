import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDryCleaningOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningOutlinedFilled'
      short_name='DryCleaning'

      {...props}
    >
      <path d="M7 22V16H5.4Q4.425 16 3.712 15.287Q3 14.575 3 13.6Q3 12.875 3.388 12.262Q3.775 11.65 4.45 11.35L11 8.45V7.8Q10.125 7.5 9.562 6.737Q9 5.975 9 5Q9 3.725 9.863 2.862Q10.725 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5H13Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5Q11 5.425 11.288 5.713Q11.575 6 12 6Q12.425 6 12.713 6.287Q13 6.575 13 7V8.45L19.55 11.35Q20.225 11.65 20.613 12.262Q21 12.875 21 13.6Q21 14.575 20.288 15.287Q19.575 16 18.6 16H17V22ZM5.4 14H7V13H17V14H18.6Q18.825 14 18.913 13.85Q19 13.7 19 13.55Q19 13.425 18.938 13.337Q18.875 13.25 18.75 13.2L12 10.2L5.25 13.2Q5.125 13.25 5.062 13.337Q5 13.425 5 13.55Q5 13.75 5.1 13.875Q5.2 14 5.4 14Z"/>
    </Icon>
  )
});

export default IconMaterialDryCleaningOutlinedFilled;
