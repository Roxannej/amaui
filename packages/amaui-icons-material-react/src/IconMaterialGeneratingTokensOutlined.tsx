import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGeneratingTokensOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokensOutlined'
      short_name='GeneratingTokens'

      {...props}
    >
      <path d="M9 20Q5.65 20 3.325 17.675Q1 15.35 1 12Q1 8.65 3.325 6.325Q5.65 4 9 4Q12.35 4 14.675 6.325Q17 8.65 17 12Q17 15.35 14.675 17.675Q12.35 20 9 20ZM9 18Q11.5 18 13.25 16.25Q15 14.5 15 12Q15 9.5 13.25 7.75Q11.5 6 9 6Q6.5 6 4.75 7.75Q3 9.5 3 12Q3 14.5 4.75 16.25Q6.5 18 9 18ZM8 15.5H10V10.5H12V9H6V10.5H8ZM19 9 17.75 6.25 15 5 17.75 3.75 19 1 20.25 3.75 23 5 20.25 6.25ZM19 23 17.75 20.25 15 19 17.75 17.75 19 15 20.25 17.75 23 19 20.25 20.25ZM9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Z"/>
    </Icon>
  )
});

export default IconMaterialGeneratingTokensOutlined;