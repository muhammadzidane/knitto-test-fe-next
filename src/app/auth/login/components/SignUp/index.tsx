import Link from "next/link";

import { AppButton, AppText } from "@/features/app/components";

const SignUp: React.FC = () => (
  <div>
    <AppText className="text--center" weight="2xbold" size="large">
      Don&apos;t have an account?
    </AppText>

    <Link href="/signup">
      <AppButton
        className="mt-5"
        rounded="large"
        variant="blank"
        size="large"
        block
      >
        SIGN UP FOR SPOTIFY
      </AppButton>
    </Link>
  </div>
);

export default SignUp;
