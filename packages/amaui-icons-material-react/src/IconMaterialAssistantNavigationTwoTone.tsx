import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantNavigationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationTwoTone'
      short_name='AssistantNavigation'

      {...props}
    >
      <path d="M8.1 17.525 11.675 15.9Q11.825 15.825 12 15.825Q12.175 15.825 12.325 15.9L15.9 17.525Q16.375 17.725 16.75 17.35Q17.125 16.975 16.925 16.525L12.7 6.35Q12.525 5.9 12.012 5.9Q11.5 5.9 11.3 6.35L7.075 16.525Q6.9 16.975 7.275 17.35Q7.65 17.725 8.1 17.525ZM12 1.4Q14.25 1.4 16.163 2.225Q18.075 3.05 19.513 4.487Q20.95 5.925 21.775 7.838Q22.6 9.75 22.6 12Q22.6 14.225 21.775 16.15Q20.95 18.075 19.513 19.512Q18.075 20.95 16.163 21.775Q14.25 22.6 12 22.6Q9.775 22.6 7.85 21.775Q5.925 20.95 4.488 19.512Q3.05 18.075 2.225 16.15Q1.4 14.225 1.4 12Q1.4 9.75 2.225 7.838Q3.05 5.925 4.488 4.487Q5.925 3.05 7.85 2.225Q9.775 1.4 12 1.4Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantNavigationTwoTone;
