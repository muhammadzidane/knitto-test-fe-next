import React from "react";

import { AppButton, AppText } from "@/features/app/components";

import "./styles.scss";

const LoginSosmed: React.FC = () => (
  <>
    <div className="d-flex flex-column gap-3">
      <AppButton
        icon="icon-facebook-circle-white"
        variant="facebook"
        rounded="large"
        size="large"
      >
        CONTINUE WITH FACEBOOK
      </AppButton>

      <AppButton
        icon="icon-apple-white"
        variant="dark-1"
        rounded="large"
        size="large"
      >
        CONTINUE WITH APPLE
      </AppButton>

      <AppButton
        icon="icon-google"
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
