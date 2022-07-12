import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreSharpW700'
      short_name='Score'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM9 12.95 13 16.95 18.7 11.275V5.3H5.3V16.65ZM12 12.3V6.3H13.5V12.3ZM15.5 12.3 13.5 9.3 15.5 6.3H17.2L15.2 9.3L17.2 12.3ZM7 12.3V8.55H9.5V7.8H7V6.3H11V10.05H8.5V10.8H11V12.3ZM9 16 6.3 18.7H18.7V14L12.85 19.85ZM5.3 18.7V5.3Z"/>
    </Icon>
  )
});

export default IconMaterialScoreSharpW700;
