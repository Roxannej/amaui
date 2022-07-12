import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantRoundedW700Filled'
      short_name='Assistant'

      {...props}
    >
      <path d="M10.9 22.675 8.65 20.425H5.3Q3.975 20.425 3.062 19.513Q2.15 18.6 2.15 17.275V3.875Q2.15 2.55 3.062 1.637Q3.975 0.725 5.3 0.725H18.7Q20.025 0.725 20.938 1.637Q21.85 2.55 21.85 3.875V17.275Q21.85 18.6 20.938 19.513Q20.025 20.425 18.7 20.425H15.35L13.1 22.675Q12.65 23.125 12 23.125Q11.35 23.125 10.9 22.675ZM13.55 12.125 15.35 11.325Q15.825 11.1 15.825 10.587Q15.825 10.075 15.35 9.85L13.55 9.025L12.75 7.225Q12.525 6.75 12.012 6.75Q11.5 6.75 11.275 7.225L10.45 9.025L8.65 9.85Q8.175 10.075 8.175 10.587Q8.175 11.1 8.65 11.325L10.45 12.125L11.275 13.95Q11.5 14.425 12.012 14.425Q12.525 14.425 12.75 13.95Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantRoundedW700Filled;
