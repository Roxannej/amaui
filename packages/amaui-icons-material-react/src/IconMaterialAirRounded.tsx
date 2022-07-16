import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirRounded'
      short_name='Air'

      {...props}
    >
      <path d="M11.5 20Q10.675 20 9.988 19.587Q9.3 19.175 8.9 18.5Q8.625 18 8.85 17.5Q9.075 17 9.7 17Q9.95 17 10.2 17.15Q10.45 17.3 10.725 17.65Q10.85 17.825 11.062 17.913Q11.275 18 11.5 18Q11.925 18 12.213 17.712Q12.5 17.425 12.5 17Q12.5 16.575 12.213 16.288Q11.925 16 11.5 16H3Q2.575 16 2.288 15.712Q2 15.425 2 15Q2 14.575 2.288 14.287Q2.575 14 3 14H11.5Q12.75 14 13.625 14.875Q14.5 15.75 14.5 17Q14.5 18.25 13.625 19.125Q12.75 20 11.5 20ZM3 10Q2.575 10 2.288 9.712Q2 9.425 2 9Q2 8.575 2.288 8.287Q2.575 8 3 8H15.5Q16.15 8 16.575 7.575Q17 7.15 17 6.5Q17 5.85 16.575 5.425Q16.15 5 15.5 5Q15.075 5 14.738 5.188Q14.4 5.375 14.2 5.725Q14 6.1 13.725 6.3Q13.45 6.5 13.175 6.5Q12.65 6.5 12.35 6.125Q12.05 5.75 12.2 5.325Q12.55 4.275 13.438 3.637Q14.325 3 15.5 3Q16.975 3 17.988 4.012Q19 5.025 19 6.5Q19 7.975 17.988 8.987Q16.975 10 15.5 10ZM19.95 17.7Q19.425 17.925 18.962 17.663Q18.5 17.4 18.5 16.8Q18.5 16.525 18.7 16.262Q18.9 16 19.275 15.8Q19.625 15.6 19.812 15.262Q20 14.925 20 14.5Q20 13.85 19.575 13.425Q19.15 13 18.5 13H3Q2.575 13 2.288 12.712Q2 12.425 2 12Q2 11.575 2.288 11.287Q2.575 11 3 11H18.5Q19.975 11 20.988 12.012Q22 13.025 22 14.5Q22 15.575 21.438 16.425Q20.875 17.275 19.95 17.7Z"/>
    </Icon>
  );
});

export default IconMaterialAirRounded;