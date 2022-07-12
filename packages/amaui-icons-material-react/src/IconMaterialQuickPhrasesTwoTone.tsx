import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickPhrasesTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrasesTwoTone'
      short_name='QuickPhrases'

      {...props}
    >
      <path d="M7.6 23.475V18.025H7.525Q4.725 17.825 2.875 15.712Q1.025 13.6 1.025 10.775Q1.025 7.85 2.963 5.75Q4.9 3.65 7.75 3.525H8.05L7 2.45L9.1 0.325L13.8 5.05L9.1 9.75L7 7.65L8.05 6.55H7.725Q6.125 6.675 5.088 7.9Q4.05 9.125 4.05 10.775Q4.05 12.525 5.2 13.762Q6.35 15 8.025 15H10.05V17.125L12.225 15H15.975Q17.65 15 18.812 13.762Q19.975 12.525 19.975 10.775Q19.975 9.025 18.812 7.787Q17.65 6.55 15.975 6.55H15.65V3.525H15.975Q18.95 3.525 20.975 5.65Q23 7.775 23 10.775Q23 13.75 20.975 15.887Q18.95 18.025 15.975 18.025H13.425Z"/>
    </Icon>
  )
});

export default IconMaterialQuickPhrasesTwoTone;
