import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInvertColorsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsSharpW700'
      short_name='InvertColors'

      {...props}
    >
      <path d="M12 21.85Q8.35 21.85 5.75 19.312Q3.15 16.775 3.15 13.15Q3.15 11.325 3.838 9.725Q4.525 8.125 5.775 6.925L12 0.8L18.225 6.925Q19.475 8.125 20.163 9.725Q20.85 11.325 20.85 13.15Q20.85 16.775 18.25 19.312Q15.65 21.85 12 21.85ZM12 18.7V5.225L7.975 9.225Q7.175 10.025 6.738 11.012Q6.3 12 6.3 13.15Q6.3 15.45 7.963 17.075Q9.625 18.7 12 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialInvertColorsSharpW700;
