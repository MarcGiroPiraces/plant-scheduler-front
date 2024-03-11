import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormProps } from "../user/components/LoginForm";
import {
  LoginFormFields,
  loginFormFieldsSchema,
} from "../user/interfaces/formFields";

export const useLoginForm = ({ actionOnSubmit }: LoginFormProps) => {
  const navigate = useNavigate();

  const defaultValues = useMemo(
    () => ({
      email: "loguimarc+3@gmail.com",
      password: "1234",
    }),
    []
  );

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginFormFields>({
    defaultValues: defaultValues,
    resolver: zodResolver(loginFormFieldsSchema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await actionOnSubmit(data);
      navigate(`/home`);
    } catch (error) {
      setError("root", { type: "manual", message: "Something went wrong" });
    }
  });

  return {
    navigate,
    register,
    onSubmit,
    setError,
    errors,
  };
};
