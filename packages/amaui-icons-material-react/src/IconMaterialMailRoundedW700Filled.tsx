import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailRoundedW700Filled'
      short_name='Mail'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85ZM12 13.775Q12.225 13.775 12.438 13.712Q12.65 13.65 12.85 13.525L19.15 9.425Q19.375 9.3 19.538 9.037Q19.7 8.775 19.7 8.45Q19.7 7.8 19.113 7.438Q18.525 7.075 17.9 7.475L12 11.3L6.1 7.475Q5.5 7.1 4.9 7.425Q4.3 7.75 4.3 8.45Q4.3 8.8 4.463 9.05Q4.625 9.3 4.85 9.425L11.15 13.525Q11.35 13.65 11.562 13.712Q11.775 13.775 12 13.775Z"/>
    </Icon>
  )
});

export default IconMaterialMailRoundedW700Filled;