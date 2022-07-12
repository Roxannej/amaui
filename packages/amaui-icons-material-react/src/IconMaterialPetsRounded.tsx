import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPetsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PetsRounded'
      short_name='Pets'

      {...props}
    >
      <path d="M4.5 12.125Q3.45 12.125 2.725 11.4Q2 10.675 2 9.625Q2 8.575 2.725 7.85Q3.45 7.125 4.5 7.125Q5.55 7.125 6.275 7.85Q7 8.575 7 9.625Q7 10.675 6.275 11.4Q5.55 12.125 4.5 12.125ZM9 8.125Q7.95 8.125 7.225 7.4Q6.5 6.675 6.5 5.625Q6.5 4.575 7.225 3.85Q7.95 3.125 9 3.125Q10.05 3.125 10.775 3.85Q11.5 4.575 11.5 5.625Q11.5 6.675 10.775 7.4Q10.05 8.125 9 8.125ZM15 8.125Q13.95 8.125 13.225 7.4Q12.5 6.675 12.5 5.625Q12.5 4.575 13.225 3.85Q13.95 3.125 15 3.125Q16.05 3.125 16.775 3.85Q17.5 4.575 17.5 5.625Q17.5 6.675 16.775 7.4Q16.05 8.125 15 8.125ZM19.5 12.125Q18.45 12.125 17.725 11.4Q17 10.675 17 9.625Q17 8.575 17.725 7.85Q18.45 7.125 19.5 7.125Q20.55 7.125 21.275 7.85Q22 8.575 22 9.625Q22 10.675 21.275 11.4Q20.55 12.125 19.5 12.125ZM6.65 22.125Q5.525 22.125 4.763 21.262Q4 20.4 4 19.225Q4 17.925 4.888 16.95Q5.775 15.975 6.65 15.025Q7.375 14.25 7.9 13.337Q8.425 12.425 9.15 11.625Q9.7 10.975 10.425 10.55Q11.15 10.125 12 10.125Q12.85 10.125 13.575 10.525Q14.3 10.925 14.85 11.575Q15.55 12.375 16.087 13.3Q16.625 14.225 17.35 15.025Q18.225 15.975 19.113 16.95Q20 17.925 20 19.225Q20 20.4 19.238 21.262Q18.475 22.125 17.35 22.125Q16 22.125 14.675 21.9Q13.35 21.675 12 21.675Q10.65 21.675 9.325 21.9Q8 22.125 6.65 22.125Z"/>
    </Icon>
  )
});

export default IconMaterialPetsRounded;
