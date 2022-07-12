import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStyleSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleSharpW700'
      short_name='Style'

      {...props}
    >
      <path d="M3.125 13.15V20.1L0.425 19ZM8.05 22.3H5.125V14.3ZM10.675 23.7 4.225 6.025 17.175 1.3 23.6 18.975ZM11.525 10.725Q12.1 10.725 12.513 10.325Q12.925 9.925 12.925 9.35Q12.925 8.775 12.513 8.362Q12.1 7.95 11.525 7.95Q10.95 7.95 10.55 8.362Q10.15 8.775 10.15 9.35Q10.15 9.925 10.55 10.325Q10.95 10.725 11.525 10.725ZM12.55 19.625 19.525 17.05 15.275 5.375 8.3 7.95ZM8.3 7.95 15.275 5.375Z"/>
    </Icon>
  )
});

export default IconMaterialStyleSharpW700;
