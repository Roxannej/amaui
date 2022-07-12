import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiObjectsOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsOutlined'
      short_name='EmojiObjects'

      {...props}
    >
      <path d="M12 22Q11.35 22 10.825 21.688Q10.3 21.375 10 20.85Q9.175 20.85 8.588 20.263Q8 19.675 8 18.85V15.3Q6.525 14.325 5.638 12.725Q4.75 11.125 4.75 9.25Q4.75 6.225 6.862 4.112Q8.975 2 12 2Q15.025 2 17.137 4.112Q19.25 6.225 19.25 9.25Q19.25 11.175 18.363 12.75Q17.475 14.325 16 15.3V18.85Q16 19.675 15.413 20.263Q14.825 20.85 14 20.85Q13.7 21.375 13.175 21.688Q12.65 22 12 22ZM10 18.85H14V17.95H10ZM10 16.95H14V16H10ZM9.8 14H11.25V11.3L9.05 9.1L10.1 8.05L12 9.95L13.9 8.05L14.95 9.1L12.75 11.3V14H14.2Q15.55 13.35 16.4 12.087Q17.25 10.825 17.25 9.25Q17.25 7.05 15.725 5.525Q14.2 4 12 4Q9.8 4 8.275 5.525Q6.75 7.05 6.75 9.25Q6.75 10.825 7.6 12.087Q8.45 13.35 9.8 14ZM12 9.95ZM12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiObjectsOutlined;
