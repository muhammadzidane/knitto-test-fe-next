// Next
import Link from "next/link";

// Components
import { AppButton, AppText } from "@/features/app/components";

const SignUp = () => (
  <div>
    <AppText className="text--center" size="large" weight="2xbold">
      Don&apos;t have an account?
    </AppText>

    <Link href="/signup">
      <AppButton
        className="mt-5"
        variant="blank"
        size="large"
        rounded="large"
        block
      >
        SIGN UP FOR SPOTIFY
      </AppButton>
    </Link>
  </div>
);

export default SignUp;
