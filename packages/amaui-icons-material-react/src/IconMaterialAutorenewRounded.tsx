import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutorenewRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutorenewRounded'
      short_name='Autorenew'

      {...props}
    >
      <path d="M4.475 14.7Q4.225 14.05 4.113 13.387Q4 12.725 4 12.05Q4 8.7 6.325 6.35Q8.65 4 12 4H12.175L11.275 3.1Q11 2.825 11 2.4Q11 1.975 11.275 1.7Q11.55 1.425 11.975 1.425Q12.4 1.425 12.675 1.7L15.275 4.3Q15.425 4.45 15.488 4.625Q15.55 4.8 15.55 5Q15.55 5.2 15.488 5.375Q15.425 5.55 15.275 5.7L12.675 8.3Q12.4 8.575 11.975 8.575Q11.55 8.575 11.275 8.3Q11 8.025 11 7.6Q11 7.175 11.275 6.9L12.175 6H12Q9.5 6 7.75 7.762Q6 9.525 6 12.05Q6 12.55 6.088 13.025Q6.175 13.5 6.35 13.975Q6.45 14.225 6.4 14.512Q6.35 14.8 6.15 15Q5.7 15.45 5.188 15.363Q4.675 15.275 4.475 14.7ZM11.325 22.3 8.725 19.7Q8.575 19.55 8.513 19.375Q8.45 19.2 8.45 19Q8.45 18.8 8.513 18.625Q8.575 18.45 8.725 18.3L11.325 15.7Q11.6 15.425 12.025 15.425Q12.45 15.425 12.725 15.7Q13 15.975 13 16.4Q13 16.825 12.725 17.1L11.825 18H12Q14.5 18 16.25 16.238Q18 14.475 18 11.95Q18 11.45 17.913 10.975Q17.825 10.5 17.65 10.025Q17.55 9.775 17.6 9.487Q17.65 9.2 17.85 9Q18.3 8.55 18.812 8.637Q19.325 8.725 19.525 9.3Q19.775 9.95 19.888 10.612Q20 11.275 20 11.95Q20 15.3 17.675 17.65Q15.35 20 12 20H11.825L12.725 20.9Q13 21.175 13 21.6Q13 22.025 12.725 22.3Q12.45 22.575 12.025 22.575Q11.6 22.575 11.325 22.3Z"/>
    </Icon>
  )
});

export default IconMaterialAutorenewRounded;
