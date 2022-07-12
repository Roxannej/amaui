import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewModuleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleRounded'
      short_name='ViewModule'

      {...props}
    >
      <path d="M3.025 17V7Q3.025 6.175 3.613 5.588Q4.2 5 5.025 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19H5.025Q4.2 19 3.613 18.413Q3.025 17.825 3.025 17ZM15.675 11H19Q19 11 19 11Q19 11 19 11V7Q19 7 19 7Q19 7 19 7H15.675Q15.675 7 15.675 7Q15.675 7 15.675 7V11Q15.675 11 15.675 11Q15.675 11 15.675 11ZM10.35 11H13.675Q13.675 11 13.675 11Q13.675 11 13.675 11V7Q13.675 7 13.675 7Q13.675 7 13.675 7H10.35Q10.35 7 10.35 7Q10.35 7 10.35 7V11Q10.35 11 10.35 11Q10.35 11 10.35 11ZM5.025 11H8.35Q8.35 11 8.35 11Q8.35 11 8.35 11V7Q8.35 7 8.35 7Q8.35 7 8.35 7H5.025Q5.025 7 5.025 7Q5.025 7 5.025 7V11Q5.025 11 5.025 11Q5.025 11 5.025 11ZM5.025 17H8.35Q8.35 17 8.35 17Q8.35 17 8.35 17V13Q8.35 13 8.35 13Q8.35 13 8.35 13H5.025Q5.025 13 5.025 13Q5.025 13 5.025 13V17Q5.025 17 5.025 17Q5.025 17 5.025 17ZM10.35 17H13.675Q13.675 17 13.675 17Q13.675 17 13.675 17V13Q13.675 13 13.675 13Q13.675 13 13.675 13H10.35Q10.35 13 10.35 13Q10.35 13 10.35 13V17Q10.35 17 10.35 17Q10.35 17 10.35 17ZM15.675 17H19Q19 17 19 17Q19 17 19 17V13Q19 13 19 13Q19 13 19 13H15.675Q15.675 13 15.675 13Q15.675 13 15.675 13V17Q15.675 17 15.675 17Q15.675 17 15.675 17Z"/>
    </Icon>
  )
});

export default IconMaterialViewModuleRounded;
