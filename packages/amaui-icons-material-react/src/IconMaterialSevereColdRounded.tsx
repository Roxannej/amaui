import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSevereColdRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdRounded'
      short_name='SevereCold'

      {...props}
    >
      <path d="M20 10Q19.575 10 19.288 9.712Q19 9.425 19 9Q19 8.575 19.288 8.287Q19.575 8 20 8Q20.425 8 20.712 8.287Q21 8.575 21 9Q21 9.425 20.712 9.712Q20.425 10 20 10ZM11 22Q10.575 22 10.288 21.712Q10 21.425 10 21V18.4L8.1 20.3Q7.825 20.575 7.4 20.575Q6.975 20.575 6.7 20.3Q6.425 20.025 6.425 19.6Q6.425 19.175 6.7 18.9L10 15.6V14H8.4L5.1 17.3Q4.825 17.575 4.4 17.575Q3.975 17.575 3.7 17.3Q3.425 17.025 3.425 16.6Q3.425 16.175 3.7 15.9L5.6 14H3Q2.575 14 2.288 13.712Q2 13.425 2 13Q2 12.575 2.288 12.287Q2.575 12 3 12H5.6L3.7 10.1Q3.425 9.825 3.425 9.4Q3.425 8.975 3.7 8.7Q3.975 8.425 4.4 8.425Q4.825 8.425 5.1 8.7L8.4 12H10V10.4L6.7 7.1Q6.425 6.825 6.425 6.4Q6.425 5.975 6.7 5.7Q6.975 5.425 7.4 5.425Q7.825 5.425 8.1 5.7L10 7.6V5Q10 4.575 10.288 4.287Q10.575 4 11 4Q11.425 4 11.713 4.287Q12 4.575 12 5V7.6L13.9 5.7Q14.175 5.425 14.6 5.425Q15.025 5.425 15.3 5.7Q15.575 5.975 15.575 6.4Q15.575 6.825 15.3 7.1L12 10.4V12H19Q19.425 12 19.712 12.287Q20 12.575 20 13Q20 13.425 19.712 13.712Q19.425 14 19 14H16.4L18.3 15.9Q18.575 16.175 18.575 16.6Q18.575 17.025 18.3 17.3Q18.025 17.575 17.6 17.575Q17.175 17.575 16.9 17.3L13.6 14H12V15.6L15.3 18.9Q15.575 19.175 15.575 19.6Q15.575 20.025 15.3 20.3Q15.025 20.575 14.6 20.575Q14.175 20.575 13.9 20.3L12 18.4V21Q12 21.425 11.713 21.712Q11.425 22 11 22ZM20 7Q19.575 7 19.288 6.713Q19 6.425 19 6V3Q19 2.575 19.288 2.287Q19.575 2 20 2Q20.425 2 20.712 2.287Q21 2.575 21 3V6Q21 6.425 20.712 6.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

export default IconMaterialSevereColdRounded;