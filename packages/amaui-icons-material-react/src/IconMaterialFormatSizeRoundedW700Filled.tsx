import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeRoundedW700Filled'
      short_name='FormatSize'

      {...props}
    >
      <path d="M15.875 20.775Q15.1 20.775 14.55 20.212Q14 19.65 14 18.875V7H10.875Q10.1 7 9.55 6.45Q9 5.9 9 5.125Q9 4.35 9.55 3.787Q10.1 3.225 10.875 3.225H20.875Q21.65 3.225 22.213 3.787Q22.775 4.35 22.775 5.125Q22.775 5.9 22.213 6.45Q21.65 7 20.875 7H17.775V18.875Q17.775 19.65 17.213 20.212Q16.65 20.775 15.875 20.775ZM6.125 20.775Q5.35 20.775 4.788 20.212Q4.225 19.65 4.225 18.875V12.775H3.125Q2.35 12.775 1.788 12.212Q1.225 11.65 1.225 10.875Q1.225 10.1 1.788 9.55Q2.35 9 3.125 9H9.125Q9.9 9 10.45 9.55Q11 10.1 11 10.875Q11 11.65 10.45 12.212Q9.9 12.775 9.125 12.775H8V18.875Q8 19.65 7.45 20.212Q6.9 20.775 6.125 20.775Z"/>
    </Icon>
  )
});

export default IconMaterialFormatSizeRoundedW700Filled;