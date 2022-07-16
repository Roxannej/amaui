import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArmingCountdownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArmingCountdownRounded'
      short_name='ArmingCountdown'

      {...props}
    >
      <path d="M12.05 16q1.85 0 3.15-1.3 1.3-1.3 1.3-3.15 0-1.8-1.075-3.15-1.075-1.35-2.775-1.35-.325 0-.537.212-.213.213-.213.538.025.3.213.525.187.225.462.225 1.1 0 1.763.912.662.913.662 2.088 0 1.225-.863 2.087-.862.863-2.087.863-.65 0-1.262-.25-.613-.25-1.038-.75-.2-.225-.488-.288-.287-.062-.562.088-.3.175-.337.512-.038.338.212.613.65.75 1.562 1.162.913.413 1.913.413Zm-1.8-7.125q.325 0 .538-.213Q11 8.45 11 8.125q0-.325-.212-.537-.213-.213-.538-.213-.325 0-.537.213-.213.212-.213.537 0 .325.213.537.212.213.537.213ZM8.8 10.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.212.537.213.213.538.213Zm-.55 2.1q.325 0 .538-.213Q9 11.925 9 11.6q0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM12 21.925h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Zm0-2.025q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"/>
    </Icon>
  );
});

export default IconMaterialArmingCountdownRounded;