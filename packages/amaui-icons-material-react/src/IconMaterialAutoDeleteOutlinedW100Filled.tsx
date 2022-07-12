import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteOutlinedW100Filled'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M6.6 6.8V6.1H8.775L9.775 5.1H14.225L15.225 6.1H17.4V6.8ZM16.35 20.7Q14.8 20.7 13.725 19.625Q12.65 18.55 12.65 17Q12.65 15.475 13.738 14.387Q14.825 13.3 16.35 13.3Q17.875 13.3 18.962 14.387Q20.05 15.475 20.05 17Q20.05 18.55 18.975 19.625Q17.9 20.7 16.35 20.7ZM18 19.15 18.5 18.65 16.7 16.85V14.15H16V17.15ZM8.8 19.7Q8.15 19.7 7.725 19.275Q7.3 18.85 7.3 18.2V8.3H16.7V11.3Q16.5 11.275 16.35 11.275Q16.2 11.275 16 11.3Q13.75 11.45 12.2 13.087Q10.65 14.725 10.65 17Q10.65 17.7 10.812 18.387Q10.975 19.075 11.325 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialAutoDeleteOutlinedW100Filled;
