import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleFolderOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderOutlinedFilled'
      short_name='RuleFolder'

      {...props}
    >
      <path d="M7.825 16 12.775 11.05 11.35 9.625 7.825 13.175 6.4 11.75 5 13.175ZM14.4 16 16 14.4 17.6 16 19 14.6 17.4 13 19 11.4 17.6 10 16 11.6 14.4 10 13 11.4 14.6 13 13 14.6ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialRuleFolderOutlinedFilled;
