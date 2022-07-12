import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer3SelectOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectOutlined'
      short_name='Timer3Select'

      {...props}
    >
      <path d="M4 19V16H10Q10 16 10 16Q10 16 10 16V13.5Q10 13.5 10 13.5Q10 13.5 10 13.5H4V10.5H10Q10 10.5 10 10.5Q10 10.5 10 10.5V8Q10 8 10 8Q10 8 10 8H4V5H10Q11.25 5 12.125 5.875Q13 6.75 13 8V9.9Q13 10.775 12.387 11.387Q11.775 12 10.9 12Q11.775 12 12.387 12.613Q13 13.225 13 14.1V16Q13 17.25 12.125 18.125Q11.25 19 10 19ZM15 19V17H19V16H16.35Q15.775 16 15.387 15.613Q15 15.225 15 14.65V12.35Q15 11.775 15.387 11.387Q15.775 11 16.35 11H21V13H17V14H19.65Q20.225 14 20.613 14.387Q21 14.775 21 15.35V17.65Q21 18.225 20.613 18.613Q20.225 19 19.65 19Z"/>
    </Icon>
  )
});

export default IconMaterialTimer3SelectOutlined;
