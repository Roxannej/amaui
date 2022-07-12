import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleOutlinedW700'
      short_name='Rule'

      {...props}
    >
      <path d="M16.9 11.225 12.55 6.875 14.75 4.675 16.875 6.8 20.725 2.9 22.95 5.15ZM1.425 9V5.85H10.775V9ZM14.4 21.375 12.2 19.175 14.8 16.575 12.2 13.975 14.4 11.775 17 14.375 19.6 11.775 21.8 13.975 19.2 16.575 21.8 19.175 19.6 21.375 17 18.775ZM1.425 18.15V15H10.775V18.15Z"/>
    </Icon>
  )
});

export default IconMaterialRuleOutlinedW700;