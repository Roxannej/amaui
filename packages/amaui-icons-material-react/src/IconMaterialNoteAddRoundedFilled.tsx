import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddRoundedFilled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M12 18Q12.425 18 12.713 17.712Q13 17.425 13 17V15H15Q15.425 15 15.713 14.712Q16 14.425 16 14Q16 13.575 15.713 13.287Q15.425 13 15 13H13V11Q13 10.575 12.713 10.287Q12.425 10 12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V13H9Q8.575 13 8.288 13.287Q8 13.575 8 14Q8 14.425 8.288 14.712Q8.575 15 9 15H11V17Q11 17.425 11.288 17.712Q11.575 18 12 18ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM14 9H18L13 4V8Q13 8.425 13.288 8.712Q13.575 9 14 9Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddRoundedFilled;
