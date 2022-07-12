import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoicemailRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoicemailRoundedW700Filled'
      short_name='Voicemail'

      {...props}
    >
      <path d="M5.8 16.85Q3.575 16.85 2.025 15.288Q0.475 13.725 0.475 11.5Q0.475 9.275 2.025 7.712Q3.575 6.15 5.8 6.15Q8.025 6.15 9.588 7.712Q11.15 9.275 11.15 11.5Q11.15 12.175 10.988 12.825Q10.825 13.475 10.475 14.075H13.525Q13.175 13.475 13.013 12.825Q12.85 12.175 12.85 11.5Q12.85 9.275 14.413 7.712Q15.975 6.15 18.2 6.15Q20.425 6.15 21.975 7.712Q23.525 9.275 23.525 11.5Q23.525 13.725 21.975 15.288Q20.425 16.85 18.2 16.85Z"/>
    </Icon>
  )
});

export default IconMaterialVoicemailRoundedW700Filled;