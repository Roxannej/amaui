import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAltSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltSharpW700'
      short_name='NoteAlt'

      {...props}
    >
      <path d="M7.025 17.05H9.125L15.175 11.05L13.025 8.9L7.025 14.9ZM15.875 10.35 16.925 9.25Q17.075 9.1 17.075 8.9Q17.075 8.7 16.925 8.55L15.525 7.15Q15.375 7 15.175 7Q14.975 7 14.825 7.15L13.725 8.2ZM2.15 21.925V2.225H8.675Q9.175 1.275 10.062 0.75Q10.95 0.225 12 0.225Q13.05 0.225 13.938 0.75Q14.825 1.275 15.325 2.225H21.85V21.925ZM12 4.525Q12.4 4.525 12.675 4.25Q12.95 3.975 12.95 3.575Q12.95 3.175 12.675 2.9Q12.4 2.625 12 2.625Q11.6 2.625 11.325 2.9Q11.05 3.175 11.05 3.575Q11.05 3.975 11.325 4.25Q11.6 4.525 12 4.525ZM18.7 18.775V5.375H5.3V18.775ZM5.3 5.375V18.775Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAltSharpW700;
