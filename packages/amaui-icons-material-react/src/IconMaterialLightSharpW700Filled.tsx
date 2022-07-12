import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightSharpW700Filled'
      short_name='Light'

      {...props}
    >
      <path d="M12 21.85Q10.225 21.85 8.8 20.7Q7.375 19.55 7.05 17.85H2.725Q2.475 17.2 2.312 16.413Q2.15 15.625 2.15 14.7Q2.175 11.1 4.55 8.462Q6.925 5.825 10.425 5.275V1.9H13.575V5.275Q17.075 5.825 19.45 8.462Q21.825 11.1 21.85 14.7Q21.85 15.625 21.688 16.413Q21.525 17.2 21.275 17.85H16.95Q16.625 19.55 15.2 20.7Q13.775 21.85 12 21.85ZM5.3 14.7H18.7Q18.7 12.05 16.75 10.175Q14.8 8.3 12 8.3Q9.2 8.3 7.25 10.175Q5.3 12.05 5.3 14.7ZM12 18.7Q12.525 18.7 12.9 18.462Q13.275 18.225 13.425 17.85H10.575Q10.725 18.225 11.1 18.462Q11.475 18.7 12 18.7ZM12 18.7Q11.475 18.7 11.1 18.462Q10.725 18.225 10.575 17.85H13.425Q13.275 18.225 12.9 18.462Q12.525 18.7 12 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialLightSharpW700Filled;
