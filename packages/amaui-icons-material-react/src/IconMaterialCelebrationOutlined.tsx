import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCelebrationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationOutlined'
      short_name='Celebration'

      {...props}
    >
      <path d="M2 22 7 8 16 17ZM5.3 18.7 12.35 16.2 7.8 11.65ZM14.55 12.55 13.5 11.5 19.1 5.9Q19.9 5.1 21.025 5.1Q22.15 5.1 22.95 5.9L23.55 6.5L22.5 7.55L21.9 6.95Q21.55 6.6 21.025 6.6Q20.5 6.6 20.15 6.95ZM10.55 8.55 9.5 7.5 10.1 6.9Q10.45 6.55 10.45 6.05Q10.45 5.55 10.1 5.2L9.45 4.55L10.5 3.5L11.15 4.15Q11.95 4.95 11.95 6.05Q11.95 7.15 11.15 7.95ZM12.55 10.55 11.5 9.5 15.1 5.9Q15.45 5.55 15.45 5.025Q15.45 4.5 15.1 4.15L13.5 2.55L14.55 1.5L16.15 3.1Q16.95 3.9 16.95 5.025Q16.95 6.15 16.15 6.95ZM16.55 14.55 15.5 13.5 17.1 11.9Q17.9 11.1 19.025 11.1Q20.15 11.1 20.95 11.9L22.55 13.5L21.5 14.55L19.9 12.95Q19.55 12.6 19.025 12.6Q18.5 12.6 18.15 12.95ZM5.3 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialCelebrationOutlined;