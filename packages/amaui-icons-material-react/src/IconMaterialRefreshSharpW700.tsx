import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRefreshSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshSharpW700'
      short_name='Refresh'

      {...props}
    >
      <path d="M11.9 20.85Q8.225 20.85 5.638 18.262Q3.05 15.675 3.05 12Q3.05 8.325 5.638 5.737Q8.225 3.15 11.9 3.15Q13.85 3.15 15.588 3.937Q17.325 4.725 18.55 6.225V3.15H20.95V11.375H12.7V9H16.75Q15.95 7.75 14.675 7.025Q13.4 6.3 11.9 6.3Q9.525 6.3 7.863 7.963Q6.2 9.625 6.2 12Q6.2 14.375 7.863 16.038Q9.525 17.7 11.9 17.7Q13.675 17.7 15.138 16.675Q16.6 15.65 17.25 14H20.525Q19.8 17 17.4 18.925Q15 20.85 11.9 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialRefreshSharpW700;
