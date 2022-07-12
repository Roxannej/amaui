import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRsvpOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RsvpOutlinedFilled'
      short_name='Rsvp'

      {...props}
    >
      <path d="M14.25 15 12.5 9H14L15 12.425L16 9H17.5L15.75 15ZM1 15V9H4.5Q5.125 9 5.562 9.438Q6 9.875 6 10.5V11.5Q6 11.95 5.738 12.325Q5.475 12.7 5.1 12.9L6 15H4.5L3.65 13H2.5V15ZM2.5 11.5H4.5Q4.5 11.5 4.5 11.5Q4.5 11.5 4.5 11.5V10.5Q4.5 10.5 4.5 10.5Q4.5 10.5 4.5 10.5H2.5ZM18 15V9H21.5Q22.125 9 22.562 9.438Q23 9.875 23 10.5V11.5Q23 12.125 22.562 12.562Q22.125 13 21.5 13H19.5V15ZM19.5 11.5H21.5Q21.5 11.5 21.5 11.5Q21.5 11.5 21.5 11.5V10.5Q21.5 10.5 21.5 10.5Q21.5 10.5 21.5 10.5H19.5ZM7 15V13.5H10V12.75H8Q7.575 12.75 7.287 12.462Q7 12.175 7 11.75V10Q7 9.575 7.287 9.287Q7.575 9 8 9H11.5V10.5H8.5V11.25H10.5Q10.925 11.25 11.213 11.537Q11.5 11.825 11.5 12.25V14Q11.5 14.425 11.213 14.712Q10.925 15 10.5 15Z"/>
    </Icon>
  )
});

export default IconMaterialRsvpOutlinedFilled;
