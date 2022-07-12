import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTocRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TocRounded'
      short_name='Toc'

      {...props}
    >
      <path d="M4 9Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H16Q16.425 7 16.712 7.287Q17 7.575 17 8Q17 8.425 16.712 8.712Q16.425 9 16 9ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H16Q16.425 11 16.712 11.287Q17 11.575 17 12Q17 12.425 16.712 12.712Q16.425 13 16 13ZM4 17Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H16Q16.425 15 16.712 15.287Q17 15.575 17 16Q17 16.425 16.712 16.712Q16.425 17 16 17ZM20 17Q19.575 17 19.288 16.712Q19 16.425 19 16Q19 15.575 19.288 15.287Q19.575 15 20 15Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM20 9Q19.575 9 19.288 8.712Q19 8.425 19 8Q19 7.575 19.288 7.287Q19.575 7 20 7Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM20 13Q19.575 13 19.288 12.712Q19 12.425 19 12Q19 11.575 19.288 11.287Q19.575 11 20 11Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13Z"/>
    </Icon>
  )
});

export default IconMaterialTocRounded;
