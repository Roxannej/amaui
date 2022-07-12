import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsCellOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCellOutlinedFilled'
      short_name='SettingsCell'

      {...props}
    >
      <path d="M16 15V5H8V15ZM8 24Q7.575 24 7.287 23.712Q7 23.425 7 23Q7 22.575 7.287 22.288Q7.575 22 8 22Q8.425 22 8.713 22.288Q9 22.575 9 23Q9 23.425 8.713 23.712Q8.425 24 8 24ZM12 24Q11.575 24 11.288 23.712Q11 23.425 11 23Q11 22.575 11.288 22.288Q11.575 22 12 22Q12.425 22 12.713 22.288Q13 22.575 13 23Q13 23.425 12.713 23.712Q12.425 24 12 24ZM16 24Q15.575 24 15.288 23.712Q15 23.425 15 23Q15 22.575 15.288 22.288Q15.575 22 16 22Q16.425 22 16.712 22.288Q17 22.575 17 23Q17 23.425 16.712 23.712Q16.425 24 16 24ZM16 0Q16.825 0 17.413 0.587Q18 1.175 18 2V18Q18 18.825 17.413 19.413Q16.825 20 16 20H8Q7.175 20 6.588 19.413Q6 18.825 6 18V2Q6 1.175 6.588 0.587Q7.175 0 8 0Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsCellOutlinedFilled;
