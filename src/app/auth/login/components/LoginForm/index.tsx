import React, { useCallback, useState } from "react";

import { Formik, Field, Form } from "formik";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import * as Yup from "yup";

import {
  AppCheckBox,
  AppButton,
  AppInput,
  AppText,
} from "@/features/app/components";
import { useToast } from "@/features/app/hooks";
import { type IAppResetForm } from "@/features/app/interfaces";

import { type ILoginValues } from "./interfaces";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Handles login form submission.
   *
   * @param values - An object containing login values.
   * @param action - An action object.
   * @returns A Promise that resolves to void.
   */
  const onSubmitForm = useCallback(
    async (
      values: ILoginValues,
      { resetForm }: IAppResetForm
    ): Promise<void> => {
      setLoading(true);

      const response = await signIn("credentials", {
        password: values.password,
        user: values.user,
        redirect: false,
      });

      if (response?.ok) {
        router.push("/home");
      } else {
        showToast({
          description: response?.error ?? "Tejadi kesalahan",
          title: "Error!",
          type: "error",
        });
        setLoading(false);
        resetForm();
      }
    },
    [router, showToast]
  );

  // Validation Form
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Tidak boleh kosong"),
    user: Yup.string().required("Tidak boleh kosong"),
  });

  return (
    <Formik
      initialValues={{
        password: "",
        user: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {({ touched, errors }) => (
        <Form className="login__form">
          <Field
            errorMessage={errors.user && touched.user && errors.user}
            placeholder="Email address or username"
            label="Email address or username"
            as={AppInput}
            name="user"
          />

          <Field
            errorMessage={
              errors.password && touched.password && errors.password
            }
            placeholder="Password"
            label="Password"
            name="password"
            type="password"
            as={AppInput}
          />

          <AppText className="text--underline" weight="semibold">
            Forgot your password?
          </AppText>

          <div className="d-flex justify-between align-center mt-4">
            <AppCheckBox label="Remember me" />

            <AppButton
              loading={loading}
              variant="spotify"
              rounded="large"
              type="submit"
              width="121px"
              size="large"
            >
              LOG IN
            </AppButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
