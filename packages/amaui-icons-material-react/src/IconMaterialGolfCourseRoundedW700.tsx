import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGolfCourseRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseRoundedW700'
      short_name='GolfCourse'

      {...props}
    >
      <path d="M20.45 21.2Q19.725 21.2 19.25 20.712Q18.775 20.225 18.775 19.5Q18.775 18.775 19.25 18.288Q19.725 17.8 20.45 17.8Q21.175 17.8 21.663 18.288Q22.15 18.775 22.15 19.5Q22.15 20.225 21.663 20.712Q21.175 21.2 20.45 21.2ZM10 22.775Q7.175 22.775 5.2 21.962Q3.225 21.15 3.225 20Q3.225 19.275 4.188 18.625Q5.15 17.975 6.625 17.55V19Q6.625 19.425 6.912 19.712Q7.2 20 7.625 20Q8.05 20 8.338 19.712Q8.625 19.425 8.625 19V3.475Q8.625 2.6 9.363 2.137Q10.1 1.675 10.9 2.075L15.875 4.525Q16.75 4.95 16.763 5.938Q16.775 6.925 15.9 7.35L11.375 9.65V17.325Q13.8 17.525 15.288 18.237Q16.775 18.95 16.775 20Q16.775 21 14.95 21.887Q13.125 22.775 10 22.775Z"/>
    </Icon>
  )
});

export default IconMaterialGolfCourseRoundedW700;
