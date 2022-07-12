import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFaceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRoundedW100Filled'
      short_name='Face'

      {...props}
    >
      <path d="M9 14.25Q8.475 14.25 8.113 13.887Q7.75 13.525 7.75 13Q7.75 12.475 8.113 12.113Q8.475 11.75 9 11.75Q9.525 11.75 9.887 12.113Q10.25 12.475 10.25 13Q10.25 13.525 9.887 13.887Q9.525 14.25 9 14.25ZM15 14.25Q14.475 14.25 14.113 13.887Q13.75 13.525 13.75 13Q13.75 12.475 14.113 12.113Q14.475 11.75 15 11.75Q15.525 11.75 15.887 12.113Q16.25 12.475 16.25 13Q16.25 13.525 15.887 13.887Q15.525 14.25 15 14.25ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 11.4 19.925 10.837Q19.85 10.275 19.65 9.75Q19.125 9.875 18.6 9.938Q18.075 10 17.5 10Q15.225 10 13.2 9.025Q11.175 8.05 9.75 6.3Q8.95 8.25 7.463 9.688Q5.975 11.125 4 11.85V12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  )
});

export default IconMaterialFaceRoundedW100Filled;
