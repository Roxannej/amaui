import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRoundedW700'
      short_name='Checklist'

      {...props}
    >
      <path d="M14.7 9.575Q14.05 9.575 13.588 9.112Q13.125 8.65 13.125 8Q13.125 7.35 13.588 6.887Q14.05 6.425 14.7 6.425H21.125Q21.775 6.425 22.238 6.887Q22.7 7.35 22.7 8Q22.7 8.65 22.238 9.112Q21.775 9.575 21.125 9.575ZM14.7 17.575Q14.05 17.575 13.588 17.112Q13.125 16.65 13.125 16Q13.125 15.35 13.588 14.887Q14.05 14.425 14.7 14.425H21.125Q21.775 14.425 22.238 14.887Q22.7 15.35 22.7 16Q22.7 16.65 22.238 17.112Q21.775 17.575 21.125 17.575ZM4.55 10.675 2.425 8.55Q1.975 8.1 1.975 7.45Q1.975 6.8 2.425 6.35Q2.875 5.9 3.525 5.9Q4.175 5.9 4.625 6.35L5.65 7.375L8.775 4.225Q9.225 3.75 9.887 3.762Q10.55 3.775 11 4.25Q11.45 4.7 11.45 5.35Q11.45 6 11 6.45L6.775 10.675Q6.325 11.125 5.662 11.125Q5 11.125 4.55 10.675ZM4.55 18.675 2.425 16.55Q1.975 16.1 1.975 15.45Q1.975 14.8 2.425 14.35Q2.875 13.9 3.525 13.9Q4.175 13.9 4.625 14.35L5.65 15.375L8.775 12.225Q9.225 11.75 9.887 11.762Q10.55 11.775 11 12.25Q11.45 12.7 11.45 13.35Q11.45 14 11 14.45L6.775 18.675Q6.325 19.125 5.662 19.125Q5 19.125 4.55 18.675Z"/>
    </Icon>
  )
});

export default IconMaterialChecklistRoundedW700;
