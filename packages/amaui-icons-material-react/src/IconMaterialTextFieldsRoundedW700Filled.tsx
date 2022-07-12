import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFieldsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsRoundedW700Filled'
      short_name='TextFields'

      {...props}
    >
      <path d="M8.125 20.775Q7.35 20.775 6.788 20.212Q6.225 19.65 6.225 18.875V7H3.125Q2.35 7 1.788 6.45Q1.225 5.9 1.225 5.125Q1.225 4.35 1.788 3.787Q2.35 3.225 3.125 3.225H13.125Q13.9 3.225 14.45 3.787Q15 4.35 15 5.125Q15 5.9 14.45 6.45Q13.9 7 13.125 7H10V18.875Q10 19.65 9.45 20.212Q8.9 20.775 8.125 20.775ZM17.875 20.775Q17.1 20.775 16.55 20.212Q16 19.65 16 18.875V12.775H14.875Q14.1 12.775 13.55 12.212Q13 11.65 13 10.875Q13 10.1 13.55 9.55Q14.1 9 14.875 9H20.875Q21.65 9 22.213 9.55Q22.775 10.1 22.775 10.875Q22.775 11.65 22.213 12.212Q21.65 12.775 20.875 12.775H19.775V18.875Q19.775 19.65 19.213 20.212Q18.65 20.775 17.875 20.775Z"/>
    </Icon>
  )
});

export default IconMaterialTextFieldsRoundedW700Filled;
