import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalOutlinedW700Filled'
      short_name='Approval'

      {...props}
    >
      <path d="M2.85 23.525V17.675Q2.85 16.35 3.763 15.438Q4.675 14.525 6 14.525H18Q19.325 14.525 20.238 15.438Q21.15 16.35 21.15 17.675V23.525ZM5.625 18.925H18.375V17.3Q18.375 17.3 18.375 17.3Q18.375 17.3 18.375 17.3H5.625Q5.625 17.3 5.625 17.3Q5.625 17.3 5.625 17.3ZM12 14.525 6.2 6.475Q6.2 3.9 7.875 2.187Q9.55 0.475 12 0.475Q14.45 0.475 16.125 2.2Q17.8 3.925 17.8 6.475Z"/>
    </Icon>
  )
});

export default IconMaterialApprovalOutlinedW700Filled;
