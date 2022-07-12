import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkedCameraRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraRoundedFilled'
      short_name='LinkedCamera'

      {...props}
    >
      <path d="M20.6 6.325Q20.6 4.675 19.462 3.537Q18.325 2.4 16.675 2.4Q16.4 2.4 16.2 2.2Q16 2 16 1.7Q16 1.425 16.2 1.225Q16.4 1.025 16.675 1.025Q18.875 1.025 20.425 2.575Q21.975 4.125 21.975 6.325Q21.975 6.6 21.775 6.8Q21.575 7 21.3 7Q21 7 20.8 6.8Q20.6 6.6 20.6 6.325ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4V6Q15.825 6 16.413 6.588Q17 7.175 17 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM17.9 6.35Q17.9 5.825 17.538 5.462Q17.175 5.1 16.65 5.1Q16.375 5.1 16.188 4.887Q16 4.675 16 4.4Q16 4.125 16.2 3.925Q16.4 3.725 16.675 3.725Q17.75 3.725 18.513 4.487Q19.275 5.25 19.275 6.325Q19.275 6.6 19.075 6.8Q18.875 7 18.6 7Q18.325 7 18.113 6.812Q17.9 6.625 17.9 6.35ZM12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  )
});

export default IconMaterialLinkedCameraRoundedFilled;
