import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltRoundedFilled'
      short_name='NoteAlt'

      {...props}
    >
      <path d="M15.1 11.05 12.95 8.9 7.225 14.625Q7.1 14.75 7.05 14.875Q7 15 7 15.15V16.5Q7 16.7 7.15 16.85Q7.3 17 7.5 17H8.8Q8.95 17 9.088 16.95Q9.225 16.9 9.325 16.775ZM15.8 10.35 16.85 9.25Q17 9.1 17 8.9Q17 8.7 16.85 8.55L15.45 7.15Q15.3 7 15.1 7Q14.9 7 14.75 7.15L13.65 8.2ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25Z"/>
    </Icon>
  );
});

export default IconMaterialNoteAltRoundedFilled;