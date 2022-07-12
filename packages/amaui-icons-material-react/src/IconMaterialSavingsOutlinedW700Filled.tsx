import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSavingsOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsOutlinedW700Filled'
      short_name='Savings'

      {...props}
    >
      <path d="M15.975 11.95Q16.625 11.95 17.087 11.487Q17.55 11.025 17.55 10.375Q17.55 9.725 17.087 9.262Q16.625 8.8 15.975 8.8Q15.325 8.8 14.863 9.262Q14.4 9.725 14.4 10.375Q14.4 11.025 14.863 11.487Q15.325 11.95 15.975 11.95ZM6.925 10.225H12.95V7.45H6.925ZM3.175 21.85Q2.35 19.075 1.825 17.163Q1.3 15.25 1 13.863Q0.7 12.475 0.588 11.462Q0.475 10.45 0.475 9.5Q0.475 6.85 2.312 5Q4.15 3.15 6.8 3.15H12.625Q13.425 2.25 14.562 1.7Q15.7 1.15 17.025 1.15Q18.15 1.15 18.763 1.825Q19.375 2.5 19.375 3.45Q19.375 3.65 19.337 3.837Q19.3 4.025 19.25 4.2Q19.2 4.375 19.138 4.55Q19.075 4.725 19.025 4.95L20.7 6.65H23.55V15.1L20.4 16.075L18.675 21.85H11.725V19.85H10.125V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialSavingsOutlinedW700Filled;
