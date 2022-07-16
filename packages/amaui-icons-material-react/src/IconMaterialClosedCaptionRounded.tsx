import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClosedCaptionRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionRounded'
      short_name='ClosedCaption'

      {...props}
    >
      <path d="M7 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V13.5Q11 13.3 10.85 13.15Q10.7 13 10.5 13H10Q9.8 13 9.65 13.15Q9.5 13.3 9.5 13.5Q9.5 13.5 9.5 13.5Q9.5 13.5 9.5 13.5H7.5Q7.5 13.5 7.5 13.5Q7.5 13.5 7.5 13.5V10.5Q7.5 10.5 7.5 10.5Q7.5 10.5 7.5 10.5H9.5Q9.5 10.5 9.5 10.5Q9.5 10.5 9.5 10.5Q9.5 10.7 9.65 10.85Q9.8 11 10 11H10.5Q10.7 11 10.85 10.85Q11 10.7 11 10.5V10Q11 9.575 10.713 9.287Q10.425 9 10 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10V14Q6 14.425 6.287 14.712Q6.575 15 7 15ZM14 15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V13.5Q18 13.3 17.85 13.15Q17.7 13 17.5 13H17Q16.8 13 16.65 13.15Q16.5 13.3 16.5 13.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5H14.5Q14.5 13.5 14.5 13.5Q14.5 13.5 14.5 13.5V10.5Q14.5 10.5 14.5 10.5Q14.5 10.5 14.5 10.5H16.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5Q16.5 10.7 16.65 10.85Q16.8 11 17 11H17.5Q17.7 11 17.85 10.85Q18 10.7 18 10.5V10Q18 9.575 17.712 9.287Q17.425 9 17 9H14Q13.575 9 13.288 9.287Q13 9.575 13 10V14Q13 14.425 13.288 14.712Q13.575 15 14 15ZM5 4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V18Q21 18.825 20.413 19.413Q19.825 20 19 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V6Q3 5.175 3.587 4.588Q4.175 4 5 4ZM19 6H5Q5 6 5 6Q5 6 5 6V18Q5 18 5 18Q5 18 5 18H19Q19 18 19 18Q19 18 19 18V6Q19 6 19 6Q19 6 19 6ZM5 18Q5 18 5 18Q5 18 5 18V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V18Q5 18 5 18Q5 18 5 18Z"/>
    </Icon>
  );
});

export default IconMaterialClosedCaptionRounded;