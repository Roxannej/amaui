import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDuoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoOutlinedW700'
      short_name='Duo'

      {...props}
    >
      <path d="M12 22.85Q9.75 22.85 7.775 22Q5.8 21.15 4.325 19.675Q2.85 18.2 2 16.225Q1.15 14.25 1.15 12Q1.15 9.75 2 7.775Q2.85 5.8 4.325 4.325Q5.8 2.85 7.775 2Q9.75 1.15 12 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V12Q22.85 14.25 22 16.225Q21.15 18.2 19.675 19.675Q18.2 21.15 16.225 22Q14.25 22.85 12 22.85ZM12 19.7Q15.2 19.7 17.45 17.45Q19.7 15.2 19.7 12V4.3Q19.7 4.3 19.7 4.3Q19.7 4.3 19.7 4.3H12Q8.8 4.3 6.55 6.55Q4.3 8.8 4.3 12Q4.3 15.2 6.55 17.45Q8.8 19.7 12 19.7ZM7 15H14V13L17 15V9L14 11V9H7ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialDuoOutlinedW700;
