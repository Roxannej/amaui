import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonSharpW700'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M2.15 22.85V1.15H19.85V11.25Q19.175 11.05 18.3 11Q17.425 10.95 16.7 11.1V4.3H12V11L9.5 9.5L7 11V4.3H5.3V19.7H11.225Q11.425 20.5 11.9 21.387Q12.375 22.275 12.975 22.85ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM16.75 20.5 20.75 18 16.75 15.5ZM7 4.3H9.5H12H7ZM5.3 4.3H7H9.5H12H16.7Q14.075 4.3 12.538 4.3Q11 4.3 11 4.3Q11 4.3 11.062 4.3Q11.125 4.3 11.225 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialPlayLessonSharpW700;
