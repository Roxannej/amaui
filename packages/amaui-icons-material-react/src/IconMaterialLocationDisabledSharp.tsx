import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledSharp'
      short_name='LocationDisabled'

      {...props}
    >
      <path d="M19.6 16.85 18.15 15.4Q18.575 14.65 18.788 13.8Q19 12.95 19 12.05Q19 9.15 16.95 7.1Q14.9 5.05 12 5.05Q11.1 5.05 10.25 5.262Q9.4 5.475 8.65 5.9L7.2 4.45Q8.075 3.925 9.013 3.575Q9.95 3.225 11 3.1V1.1H13V3.1Q16.125 3.45 18.363 5.688Q20.6 7.925 20.95 11.05H22.95V13.05H20.95Q20.825 14.1 20.475 15.037Q20.125 15.975 19.6 16.85ZM11 23V21Q7.875 20.65 5.638 18.413Q3.4 16.175 3.05 13.05H1.05V11.05H3.05Q3.175 10 3.525 9.062Q3.875 8.125 4.4 7.25L1.4 4.25L2.8 2.85L21.2 21.25L19.75 22.65L16.8 19.65Q15.925 20.175 14.988 20.525Q14.05 20.875 13 21V23ZM12 19.05Q12.9 19.05 13.75 18.837Q14.6 18.625 15.35 18.2L5.85 8.7Q5.425 9.45 5.213 10.3Q5 11.15 5 12.05Q5 14.95 7.05 17Q9.1 19.05 12 19.05Z"/>
    </Icon>
  )
});

export default IconMaterialLocationDisabledSharp;
