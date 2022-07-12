import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonOutlined'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M11.3 20Q11.45 20.5 11.713 21.038Q11.975 21.575 12.25 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20V4Q3 3.175 3.587 2.587Q4.175 2 5 2H17Q17.825 2 18.413 2.587Q19 3.175 19 4V11.1Q18.55 11.05 18 11.05Q17.45 11.05 17 11.1V4Q17 4 17 4Q17 4 17 4H12V11L9.5 9.5L7 11V4H5Q5 4 5 4Q5 4 5 4V20Q5 20 5 20Q5 20 5 20ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM16.75 20.5 20.75 18 16.75 15.5ZM7 4H9.5H12ZM11.3 4H5Q5 4 5 4Q5 4 5 4Q5 4 5 4Q5 4 5 4H7H9.5H12H17Q17 4 17 4Q17 4 17 4Q14.275 4 12.637 4Q11 4 11 4Q11 4 11.088 4Q11.175 4 11.3 4Z"/>
    </Icon>
  )
});

export default IconMaterialPlayLessonOutlined;