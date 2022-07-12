import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerSharpW700'
      short_name='Speaker'

      {...props}
    >
      <path d="M4.15 22.85V1.15H19.85V22.85ZM7.3 19.7H16.7V4.3H7.3ZM12 9.3Q12.825 9.3 13.413 8.712Q14 8.125 14 7.3Q14 6.475 13.413 5.887Q12.825 5.3 12 5.3Q11.175 5.3 10.588 5.887Q10 6.475 10 7.3Q10 8.125 10.588 8.712Q11.175 9.3 12 9.3ZM12 19Q13.65 19 14.825 17.825Q16 16.65 16 15Q16 13.35 14.825 12.175Q13.65 11 12 11Q10.35 11 9.175 12.175Q8 13.35 8 15Q8 16.65 9.175 17.825Q10.35 19 12 19ZM12 17Q11.175 17 10.588 16.413Q10 15.825 10 15Q10 14.175 10.588 13.587Q11.175 13 12 13Q12.825 13 13.413 13.587Q14 14.175 14 15Q14 15.825 13.413 16.413Q12.825 17 12 17ZM7.3 19.7V4.3V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialSpeakerSharpW700;
