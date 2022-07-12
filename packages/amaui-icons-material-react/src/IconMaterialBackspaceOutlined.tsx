import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceOutlined'
      short_name='Backspace'

      {...props}
    >
      <path d="M11.4 16 14 13.4 16.6 16 18 14.6 15.4 12 18 9.4 16.6 8 14 10.6 11.4 8 10 9.4 12.6 12 10 14.6ZM3 12 7.35 5.85Q7.625 5.45 8.062 5.225Q8.5 5 9 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19H9Q8.5 19 8.062 18.775Q7.625 18.55 7.35 18.15ZM5.45 12 9 17Q9 17 9 17Q9 17 9 17H19Q19 17 19 17Q19 17 19 17V7Q19 7 19 7Q19 7 19 7H9Q9 7 9 7Q9 7 9 7ZM19 12V7Q19 7 19 7Q19 7 19 7Q19 7 19 7Q19 7 19 7V17Q19 17 19 17Q19 17 19 17Q19 17 19 17Q19 17 19 17Z"/>
    </Icon>
  )
});

export default IconMaterialBackspaceOutlined;
