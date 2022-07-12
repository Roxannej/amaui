import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoPhotographyOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyOutlinedFilled'
      short_name='NoPhotography'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.55 2.175 6.162Q2.35 5.775 2.675 5.5L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 16.475 13.575Q16.5 13.425 16.5 13.287Q16.5 13.15 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q11.85 8.5 11.713 8.5Q11.575 8.5 11.425 8.525L7.5 4.625L9 3H15L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7ZM12 17.5Q12.575 17.5 13.125 17.375Q13.675 17.25 14.15 16.975L12.6 15.425Q12.45 15.475 12.3 15.488Q12.15 15.5 12 15.5Q10.95 15.5 10.225 14.775Q9.5 14.05 9.5 13Q9.5 12.85 9.512 12.7Q9.525 12.55 9.575 12.4L8.025 10.85Q7.75 11.325 7.625 11.875Q7.5 12.425 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  )
});

export default IconMaterialNoPhotographyOutlinedFilled;
