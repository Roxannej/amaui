import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTeamDashboardTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardTwoTone'
      short_name='TeamDashboard'

      {...props}
    >
      <path d="M5.4 21.625Q4.15 21.625 3.263 20.738Q2.375 19.85 2.375 18.6V5.4Q2.375 4.15 3.263 3.262Q4.15 2.375 5.4 2.375H18.6Q19.85 2.375 20.738 3.262Q21.625 4.15 21.625 5.4V18.6Q21.625 19.85 20.738 20.738Q19.85 21.625 18.6 21.625ZM10.075 18.6V12.925H5.4V18.6Q5.4 18.6 5.4 18.6Q5.4 18.6 5.4 18.6ZM11.95 18.6H18.6Q18.6 18.6 18.6 18.6Q18.6 18.6 18.6 18.6V12.925H11.95ZM5.4 11.05H18.6V5.4Q18.6 5.4 18.6 5.4Q18.6 5.4 18.6 5.4H5.4Q5.4 5.4 5.4 5.4Q5.4 5.4 5.4 5.4Z"/>
    </Icon>
  )
});

export default IconMaterialTeamDashboardTwoTone;