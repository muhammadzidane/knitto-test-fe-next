// React
import React, { useCallback } from "react";

// Formik & Yup
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Components
import {
  AppButton,
  AppCheckBox,
  AppInput,
  AppText,
} from "@/features/app/components";

// Interfaces
import { type ILoginValues, type IAction } from "./interfaces";

// Custom hooks
import { signIn } from "next-auth/react";

const LoginForm: React.FC = () => {
  /**
   * Handles login form submission.
   *
   * @param values - An object containing login values.
   * @param action - An action object.
   * @returns A Promise that resolves to void.
   */
  const onSubmitForm = useCallback(
    async (values: ILoginValues, { resetForm }: IAction): Promise<void> => {
      try {
        console.log(values);
        const response = await signIn("credentials", {
          user: values.user,
          password: values.password,
          redirect: false,
        });

        console.log(response);
      } catch (error) {
        resetForm();
      }
    },
    []
  );

  // Validation Form
  const validationSchema = Yup.object().shape({
    user: Yup.string().required("Tidak boleh kosong"),
    password: Yup.string().required("Tidak boleh kosong"),
  });

  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {({ errors, touched }) => (
        <Form className="login__form">
          <Field
            as={AppInput}
            name="user"
            label="Email address or username"
            placeholder="Email address or username"
            errorMessage={errors.user && touched.user && errors.user}
          />

          <Field
            as={AppInput}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            errorMessage={
              errors.password && touched.password && errors.password
            }
          />

          <AppText className="text--underline" weight="semibold">
            Forgot your password?
          </AppText>

          <div className="d-flex justify-between align-center mt-4">
            <AppCheckBox label="Remember me" />

            <AppButton
              loading={false}
              type="submit"
              variant="spotify"
              width="121px"
              size="large"
              rounded="large"
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
