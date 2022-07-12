import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer10SelectOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectOutlined'
      short_name='Timer10Select'

      {...props}
    >
      <path d="M10 16H13Q13 16 13 16Q13 16 13 16V8Q13 8 13 8Q13 8 13 8H10Q10 8 10 8Q10 8 10 8V16Q10 16 10 16Q10 16 10 16ZM10 19Q8.75 19 7.875 18.125Q7 17.25 7 16V8Q7 6.75 7.875 5.875Q8.75 5 10 5H13Q14.25 5 15.125 5.875Q16 6.75 16 8V16Q16 17.25 15.125 18.125Q14.25 19 13 19ZM3 19V8H1V5H6V19ZM17 19V17H21V16H18.35Q17.775 16 17.388 15.613Q17 15.225 17 14.65V12.35Q17 11.775 17.388 11.387Q17.775 11 18.35 11H23V13H19V14H21.65Q22.225 14 22.613 14.387Q23 14.775 23 15.35V17.65Q23 18.225 22.613 18.613Q22.225 19 21.65 19Z"/>
    </Icon>
  )
});

export default IconMaterialTimer10SelectOutlined;
