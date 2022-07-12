import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibilityOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityOutlinedW700'
      short_name='Accessibility'

      {...props}
    >
      <path d="M12 5.8Q11.025 5.8 10.325 5.1Q9.625 4.4 9.625 3.425Q9.625 2.45 10.325 1.75Q11.025 1.05 12 1.05Q12.975 1.05 13.675 1.75Q14.375 2.45 14.375 3.425Q14.375 4.4 13.675 5.1Q12.975 5.8 12 5.8ZM8.55 22.275V9.575H3V6.8H21V9.575H15.45V22.275H12.7V16H11.3V22.275Z"/>
    </Icon>
  )
});

export default IconMaterialAccessibilityOutlinedW700;