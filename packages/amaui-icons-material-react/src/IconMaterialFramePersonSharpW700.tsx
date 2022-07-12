import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFramePersonSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonSharpW700'
      short_name='FramePerson'

      {...props}
    >
      <path d="M4.75 19.25v-3.6q0-.55.25-1.025.25-.475.675-.8 1.3-.95 3.013-1.513Q10.4 11.75 12 11.75q1.6 0 3.313.562 1.712.563 3.012 1.513.425.325.675.812.25.488.25 1.013v3.6Zm2.9-2.9h8.7V16q-.95-.65-2.088-1-1.137-.35-2.262-.35T9.738 15q-1.138.35-2.088.975ZM12 11q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11Zm0-2.9q.45 0 .775-.325T13.1 7q0-.45-.325-.775T12 5.9q-.45 0-.775.325T10.9 7q0 .45.325.775T12 8.1Zm0 8.25ZM12 7ZM.15 6V.15H6V3.3H3.3V6ZM6 23.85H.15V18H3.3v2.7H6Zm12 0V20.7h2.7V18h3.15v5.85ZM20.7 6V3.3H18V.15h5.85V6Z"/>
    </Icon>
  )
});

export default IconMaterialFramePersonSharpW700;
