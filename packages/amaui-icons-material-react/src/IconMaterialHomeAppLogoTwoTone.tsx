import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeAppLogoTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAppLogoTwoTone'
      short_name='HomeAppLogo'

      {...props}
    >
      <path d="M7.7 21.55v-4.275h8.6v4.275ZM2.425 16.5v-4.875q0-.325.137-.638.138-.312.388-.562l7.975-7.075q.25-.2.525-.3.275-.1.55-.1t.55.1q.275.1.525.3L15.2 5.225Zm1.6 5.05q-.675 0-1.137-.463-.463-.462-.463-1.137V17.9l4.25-3.775v7.425Zm13.3 0v-8.725l-4.575-4.1L15.975 5.9l5.075 4.55q.275.25.4.55.125.3.125.625v8.35q0 .65-.462 1.112-.463.463-1.113.463Z"/>
    </Icon>
  )
});

export default IconMaterialHomeAppLogoTwoTone;