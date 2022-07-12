import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiPeopleSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleSharpW700'
      short_name='EmojiPeople'

      {...props}
    >
      <path d="M11.925 5.8Q10.925 5.8 10.238 5.1Q9.55 4.4 9.55 3.425Q9.55 2.425 10.238 1.737Q10.925 1.05 11.925 1.05Q12.925 1.05 13.613 1.737Q14.3 2.425 14.3 3.4Q14.3 4.4 13.613 5.1Q12.925 5.8 11.925 5.8ZM8.475 22.275V9.175Q6.175 8.375 4.825 6.337Q3.475 4.3 3.475 1.8H6.225Q6.225 3.825 7.537 5.312Q8.85 6.8 10.8 6.8H13.125Q14 6.8 14.75 7.088Q15.5 7.375 16.125 8L20.9 12.775L18.95 14.725L15.375 11.15V22.275H12.625V16H11.225V22.275Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiPeopleSharpW700;