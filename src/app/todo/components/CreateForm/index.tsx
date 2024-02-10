"use client";

import React from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { AppButton, AppInput } from "@/features/app/components";
import { useTodo } from "@/features/todo/hooks";
import { IAppResetForm } from "@/features/app/interfaces";
import { useToast } from "@/features/app/hooks";

const CreateForm: React.FC = () => {
  const { showToast } = useToast();
  const { todoCreate } = useTodo();
  const initialFormValues = {
    title: "",
  };

  // Validation Form
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please enter your todo"),
  });

  /**
   * Handles login form submission.
   *
   * @param values - An object containing login values.
   * @param action - An action object.
   * @returns A Promise that resolves to void.
   */
  const onSubmitForm = async (
    formValues: any,
    { resetForm }: IAppResetForm
  ): Promise<void> => {
    await todoCreate({ body: formValues });
    resetForm();
    showToast({
      type: "success",
      title: "Sukses",
      description: "Berhasil menambah todo!",
    });
  };

  return (
    <Formik
      onSubmit={onSubmitForm}
      validationSchema={validationSchema}
      initialValues={initialFormValues}
    >
      {({ touched, errors }) => (
        <Form>
          <Field
            errorMessage={errors.title && touched.title && errors.title}
            placeholder="Enter your todo"
            as={AppInput}
            name="title"
          />
          <AppButton type="submit" size="large" block>
            Create
          </AppButton>
        </Form>
      )}
    </Formik>
  );
};

export default CreateForm;
