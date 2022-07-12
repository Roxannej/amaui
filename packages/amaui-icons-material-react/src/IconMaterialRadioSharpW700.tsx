import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioSharpW700'
      short_name='Radio'

      {...props}
    >
      <path d="M1.15 23.525V5.95L15.175 0.225L15.9 2.025L6.625 5.85H22.85V23.525ZM4.3 20.375H19.7V13.85H4.3ZM4.3 11.85H16V10H18V11.85H19.7V9H4.3ZM7.7 19.625Q8.75 19.625 9.475 18.9Q10.2 18.175 10.2 17.125Q10.2 16.075 9.475 15.35Q8.75 14.625 7.7 14.625Q6.65 14.625 5.925 15.35Q5.2 16.075 5.2 17.125Q5.2 18.175 5.925 18.9Q6.65 19.625 7.7 19.625ZM4.3 13.85V20.375Z"/>
    </Icon>
  )
});

export default IconMaterialRadioSharpW700;
