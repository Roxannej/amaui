import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantDirectionSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirectionSharpFilled'
      short_name='AssistantDirection'

      {...props}
    >
      <path d="M12 23Q9.725 23 7.713 22.137Q5.7 21.275 4.213 19.788Q2.725 18.3 1.863 16.288Q1 14.275 1 12Q1 9.7 1.863 7.7Q2.725 5.7 4.213 4.212Q5.7 2.725 7.713 1.862Q9.725 1 12 1Q14.3 1 16.3 1.862Q18.3 2.725 19.788 4.212Q21.275 5.7 22.138 7.7Q23 9.7 23 12Q23 14.275 22.138 16.288Q21.275 18.3 19.788 19.788Q18.3 21.275 16.3 22.137Q14.3 23 12 23ZM11.95 20.35 20.325 11.975 11.95 3.6 3.575 11.975ZM7.975 14.975V9.975H13.125L12.075 8.875L13.475 7.475L16.975 10.975L13.475 14.475L12.075 13.075L13.125 11.975H9.975V14.975Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantDirectionSharpFilled;
