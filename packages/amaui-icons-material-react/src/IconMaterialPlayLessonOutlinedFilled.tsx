import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonOutlinedFilled'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M7 4V11L9.5 9.5L12 11V4ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM16.75 20.5 20.75 18 16.75 15.5ZM11 18Q11 19.075 11.338 20.087Q11.675 21.1 12.25 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20V4Q3 3.175 3.587 2.587Q4.175 2 5 2H17Q17.825 2 18.413 2.587Q19 3.175 19 4V11.05Q18.75 11.025 18.5 11.012Q18.25 11 18 11Q15.075 11 13.038 13.037Q11 15.075 11 18Z"/>
    </Icon>
  )
});

export default IconMaterialPlayLessonOutlinedFilled;
