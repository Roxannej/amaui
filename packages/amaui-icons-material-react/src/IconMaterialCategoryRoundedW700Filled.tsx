import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategoryRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryRoundedW700Filled'
      short_name='Category'

      {...props}
    >
      <path d="M7.825 11.925Q6.9 11.925 6.438 11.125Q5.975 10.325 6.475 9.525L10.65 2.675Q11.1 1.925 12 1.925Q12.9 1.925 13.35 2.675L17.525 9.525Q18.025 10.325 17.562 11.125Q17.1 11.925 16.175 11.925ZM18.2 23.525Q15.975 23.525 14.413 21.975Q12.85 20.425 12.85 18.2Q12.85 15.975 14.413 14.412Q15.975 12.85 18.2 12.85Q20.425 12.85 21.975 14.412Q23.525 15.975 23.525 18.2Q23.525 20.425 21.975 21.975Q20.425 23.525 18.2 23.525ZM2.65 23.025Q2 23.025 1.538 22.562Q1.075 22.1 1.075 21.45V14.925Q1.075 14.275 1.538 13.812Q2 13.35 2.65 13.35H9.2Q9.85 13.35 10.312 13.812Q10.775 14.275 10.775 14.925V21.45Q10.775 22.1 10.312 22.562Q9.85 23.025 9.2 23.025Z"/>
    </Icon>
  )
});

export default IconMaterialCategoryRoundedW700Filled;
