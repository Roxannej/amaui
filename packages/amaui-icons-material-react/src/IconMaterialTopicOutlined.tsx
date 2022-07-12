import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicOutlined'
      short_name='Topic'

      {...props}
    >
      <path d="M6 12H18V10H6ZM6 16H14V14H6ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialTopicOutlined;
