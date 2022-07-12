import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiscFullRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFullRounded'
      short_name='DiscFull'

      {...props}
    >
      <path d="M12 16.5Q13.875 16.5 15.188 15.188Q16.5 13.875 16.5 12Q16.5 10.125 15.188 8.812Q13.875 7.5 12 7.5Q10.125 7.5 8.812 8.812Q7.5 10.125 7.5 12Q7.5 13.875 8.812 15.188Q10.125 16.5 12 16.5ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM17.625 20.25Q16.35 21.1 14.925 21.55Q13.5 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.625 2 16.863 3.237Q19.1 4.475 20.45 6.675Q20.675 7.05 20.525 7.45Q20.375 7.85 19.95 8.025Q19.6 8.15 19.238 8.037Q18.875 7.925 18.65 7.575Q17.55 5.9 15.788 4.95Q14.025 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q13.225 20 14.375 19.637Q15.525 19.275 16.5 18.6Q16.925 18.325 17.325 18.413Q17.725 18.5 17.95 18.925Q18.125 19.275 18.025 19.663Q17.925 20.05 17.625 20.25ZM21 18Q20.575 18 20.288 17.712Q20 17.425 20 17V11Q20 10.575 20.288 10.287Q20.575 10 21 10Q21.425 10 21.712 10.287Q22 10.575 22 11V17Q22 17.425 21.712 17.712Q21.425 18 21 18ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21Q20 20.575 20.288 20.288Q20.575 20 21 20Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM17.625 20.25Q17.925 20.05 18.025 19.663Q18.125 19.275 17.95 18.925Q17.725 18.5 17.325 18.413Q16.925 18.325 16.5 18.6Q15.525 19.275 14.375 19.637Q13.225 20 12 20Q8.65 20 6.325 17.675Q4 15.35 4 12Q4 8.65 6.325 6.325Q8.65 4 12 4Q14.025 4 15.788 4.95Q17.55 5.9 18.65 7.575Q18.875 7.925 19.238 8.037Q19.6 8.15 19.95 8.025Q20.375 7.85 20.525 7.45Q20.675 7.05 20.45 6.675Q20.65 7.075 20.825 7.337Q21 7.6 21.15 8H20Q19.175 8 18.587 8.587Q18 9.175 18 10V20Z"/>
    </Icon>
  )
});

export default IconMaterialDiscFullRounded;
