import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommunicationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunicationTwoTone'
      short_name='Communication'

      {...props}
    >
      <path d="M10.225 13.5 8.95 12.225q.375-.5.375-1.163 0-.662-.375-1.187L10.225 8.6q.9.925.9 2.437 0 1.513-.9 2.463Zm2.575 2.575-1.275-1.3q1.4-1.4 1.4-3.725t-1.4-3.725l1.275-1.3q.975.9 1.438 2.25.462 1.35.462 2.775 0 1.425-.462 2.775-.463 1.35-1.438 2.25Zm-8-3.95q-1.025 0-1.762-.738Q2.3 10.65 2.3 9.625q0-1.05.738-1.775.737-.725 1.762-.725 1.05 0 1.775.725.725.725.725 1.775 0 1.025-.725 1.762-.725.738-1.775.738Zm-4.5 4.95V16q0-.725.413-1.363.412-.637 1.112-.962.675-.325 1.438-.475.762-.15 1.537-.15.8 0 1.575.15.775.15 1.425.475.7.325 1.113.962.412.638.412 1.363v1.075Zm18.9-4.95q-1.025 0-1.762-.738-.738-.737-.738-1.762 0-1.05.738-1.775.737-.725 1.762-.725 1.05 0 1.775.725.725.725.725 1.775 0 1.025-.725 1.762-.725.738-1.775.738Zm-4.5 4.95V16q0-.725.4-1.363.4-.637 1.1-.962.675-.325 1.45-.475.775-.15 1.55-.15.8 0 1.563.15.762.15 1.412.475.7.325 1.125.962.425.638.425 1.363v1.075Z"/>
    </Icon>
  )
});

export default IconMaterialCommunicationTwoTone;
