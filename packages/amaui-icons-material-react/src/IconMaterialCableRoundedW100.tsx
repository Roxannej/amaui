import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCableRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableRoundedW100'
      short_name='Cable'

      {...props}
    >
      <path d="M5 20.35Q4.85 20.35 4.75 20.25Q4.65 20.15 4.65 20V18.85H4Q3.85 18.85 3.75 18.75Q3.65 18.65 3.65 18.5V15.5Q3.65 15.35 3.75 15.25Q3.85 15.15 4 15.15H5.65V7Q5.65 5.6 6.625 4.625Q7.6 3.65 9 3.65Q10.4 3.65 11.375 4.625Q12.35 5.6 12.35 7V17Q12.35 18.125 13.113 18.887Q13.875 19.65 15 19.65Q16.125 19.65 16.888 18.887Q17.65 18.125 17.65 17V8.85H16Q15.85 8.85 15.75 8.75Q15.65 8.65 15.65 8.5V5.5Q15.65 5.35 15.75 5.25Q15.85 5.15 16 5.15H16.65V4Q16.65 3.85 16.75 3.75Q16.85 3.65 17 3.65H19Q19.15 3.65 19.25 3.75Q19.35 3.85 19.35 4V5.15H20Q20.15 5.15 20.25 5.25Q20.35 5.35 20.35 5.5V8.5Q20.35 8.65 20.25 8.75Q20.15 8.85 20 8.85H18.35V17Q18.35 18.4 17.375 19.375Q16.4 20.35 15 20.35Q13.6 20.35 12.625 19.375Q11.65 18.4 11.65 17V7Q11.65 5.875 10.887 5.112Q10.125 4.35 9 4.35Q7.875 4.35 7.113 5.112Q6.35 5.875 6.35 7V15.15H8Q8.15 15.15 8.25 15.25Q8.35 15.35 8.35 15.5V18.5Q8.35 18.65 8.25 18.75Q8.15 18.85 8 18.85H7.35V20Q7.35 20.15 7.25 20.25Q7.15 20.35 7 20.35Z"/>
    </Icon>
  )
});

export default IconMaterialCableRoundedW100;
