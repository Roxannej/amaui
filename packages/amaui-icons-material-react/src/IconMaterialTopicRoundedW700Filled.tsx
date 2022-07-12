import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicRoundedW700Filled'
      short_name='Topic'

      {...props}
    >
      <path d="M7 12H17Q17.425 12 17.712 11.712Q18 11.425 18 11Q18 10.575 17.712 10.287Q17.425 10 17 10H7Q6.575 10 6.287 10.287Q6 10.575 6 11Q6 11.425 6.287 11.712Q6.575 12 7 12ZM7 16H13Q13.425 16 13.713 15.712Q14 15.425 14 15Q14 14.575 13.713 14.287Q13.425 14 13 14H7Q6.575 14 6.287 14.287Q6 14.575 6 15Q6 15.425 6.287 15.712Q6.575 16 7 16ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V5.925Q1.15 4.6 2.062 3.687Q2.975 2.775 4.3 2.775H8.325Q8.95 2.775 9.525 3.025Q10.1 3.275 10.525 3.7L12 5.15H19.7Q21.025 5.15 21.938 6.062Q22.85 6.975 22.85 8.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialTopicRoundedW700Filled;
