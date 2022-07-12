import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalRoundedW700Filled'
      short_name='Approval'

      {...props}
    >
      <path d="M18 23.525H6Q4.7 23.525 3.775 22.6Q2.85 21.675 2.85 20.375V17.675Q2.85 16.35 3.763 15.438Q4.675 14.525 6 14.525H18Q19.325 14.525 20.238 15.438Q21.15 16.35 21.15 17.675V20.375Q21.15 21.675 20.225 22.6Q19.3 23.525 18 23.525ZM17.575 18.925Q17.925 18.925 18.15 18.688Q18.375 18.45 18.375 18.1Q18.375 17.75 18.15 17.525Q17.925 17.3 17.575 17.3H6.425Q6.075 17.3 5.85 17.525Q5.625 17.75 5.625 18.1Q5.625 18.45 5.85 18.688Q6.075 18.925 6.425 18.925ZM17.1 7.425 13.275 12.75Q13.025 13.075 12.688 13.237Q12.35 13.4 12 13.4Q11.65 13.4 11.312 13.237Q10.975 13.075 10.725 12.75L6.9 7.425Q6.575 6.975 6.4 6.337Q6.225 5.7 6.3 5.275Q6.675 3.15 8.25 1.812Q9.825 0.475 12 0.475Q14.175 0.475 15.738 1.825Q17.3 3.175 17.7 5.275Q17.775 5.7 17.6 6.337Q17.425 6.975 17.1 7.425Z"/>
    </Icon>
  )
});

export default IconMaterialApprovalRoundedW700Filled;
