import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRotateLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftRounded'
      short_name='RotateLeft'

      {...props}
    >
      <path d="M4.3 12.05Q3.775 12.05 3.463 11.688Q3.15 11.325 3.275 10.825Q3.425 10.2 3.675 9.612Q3.925 9.025 4.25 8.475Q4.525 8.05 4.988 8Q5.45 7.95 5.85 8.325Q6.05 8.525 6.113 8.862Q6.175 9.2 6 9.475Q5.725 9.9 5.55 10.362Q5.375 10.825 5.25 11.3Q5.175 11.625 4.913 11.837Q4.65 12.05 4.3 12.05ZM9.775 21.775Q9.175 21.625 8.588 21.375Q8 21.125 7.425 20.8Q7 20.525 6.95 20.062Q6.9 19.6 7.275 19.2Q7.475 19 7.812 18.938Q8.15 18.875 8.425 19.05Q8.85 19.325 9.312 19.5Q9.775 19.675 10.25 19.8Q10.575 19.875 10.788 20.137Q11 20.4 11 20.75Q11 21.275 10.637 21.587Q10.275 21.9 9.775 21.775ZM4.25 17.625Q3.925 17.05 3.675 16.462Q3.425 15.875 3.275 15.275Q3.15 14.775 3.463 14.412Q3.775 14.05 4.35 14.05Q4.65 14.05 4.913 14.262Q5.175 14.475 5.25 14.8Q5.375 15.275 5.55 15.738Q5.725 16.2 6 16.625Q6.175 16.9 6.125 17.225Q6.075 17.55 5.85 17.775Q5.475 18.15 5 18.1Q4.525 18.05 4.25 17.625ZM14.225 21.75Q13.725 21.875 13.363 21.575Q13 21.275 13 20.75Q13 20.45 13.213 20.163Q13.425 19.875 13.75 19.8Q16.075 19.225 17.538 17.35Q19 15.475 19 13.05Q19 10.125 16.962 8.088Q14.925 6.05 12 6.05H11.8L12.7 6.95Q12.975 7.225 12.975 7.65Q12.975 8.075 12.7 8.35Q12.425 8.625 12 8.625Q11.575 8.625 11.3 8.35L8.7 5.75Q8.55 5.6 8.488 5.425Q8.425 5.25 8.425 5.05Q8.425 4.85 8.488 4.675Q8.55 4.5 8.7 4.35L11.3 1.75Q11.575 1.475 12 1.475Q12.425 1.475 12.725 1.75Q13 2.05 13 2.475Q13 2.9 12.725 3.175L11.85 4.05H12Q15.75 4.05 18.375 6.675Q21 9.3 21 13.05Q21 16.15 19.1 18.55Q17.2 20.95 14.225 21.75Z"/>
    </Icon>
  );
});

export default IconMaterialRotateLeftRounded;