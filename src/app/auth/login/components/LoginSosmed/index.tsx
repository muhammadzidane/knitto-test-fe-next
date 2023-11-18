import React from "react";

import { AppButton, AppText } from "@/features/app/components";

const LoginSosmed: React.FC = () => (
  <>
    <div className="login__sosmed">
      <AppButton
        icon="/svg/facebook-circle-white-24x24.svg"
        variant="facebook"
        rounded="large"
        size="large"
      >
        CONTINUE WITH FACEBOOK
      </AppButton>

      <AppButton
        icon="/svg/apple-white.svg"
        variant="dark-1"
        rounded="large"
        size="large"
      >
        CONTINUE WITH APPLE
      </AppButton>

      <AppButton
        icon="/svg/google.svg"
        rounded="large"
        variant="blank"
        size="large"
      >
        CONTINUE WITH GOOGLE
      </AppButton>

      <AppButton rounded="large" variant="blank" size="large">
        CONTINUE WITH PHONE NUMBER
      </AppButton>
    </div>

    <div style={{ height: "20px" }}>
      <AppText className="login__or" weight="bold">
        OR
      </AppText>
      <hr className="login__or-line" />
    </div>
  </>
);

export default LoginSosmed;
