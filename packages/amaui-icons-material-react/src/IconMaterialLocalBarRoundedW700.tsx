import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarRoundedW700'
      short_name='LocalBar'

      {...props}
    >
      <path d="M7 21.575Q6.35 21.575 5.888 21.112Q5.425 20.65 5.425 20Q5.425 19.35 5.888 18.888Q6.35 18.425 7 18.425H10.425V14.625L2.75 5.975Q2.5 5.7 2.325 5.237Q2.15 4.775 2.15 4.375Q2.15 3.45 2.8 2.8Q3.45 2.15 4.375 2.15H19.625Q20.55 2.15 21.2 2.8Q21.85 3.45 21.85 4.4Q21.85 4.775 21.675 5.237Q21.5 5.7 21.25 5.975L13.575 14.625V18.425H17Q17.65 18.425 18.113 18.888Q18.575 19.35 18.575 20Q18.575 20.65 18.113 21.112Q17.65 21.575 17 21.575ZM7.875 7H16.125L17.65 5.3H6.35ZM12 11.65 14.35 9H9.65ZM12 11.65Z"/>
    </Icon>
  )
});

export default IconMaterialLocalBarRoundedW700;
