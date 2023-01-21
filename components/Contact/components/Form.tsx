import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { fetchFunc } from "../../../api/fetch";
import { IFormValues } from "../../../next.d.interfaces";
import { useState } from "react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const scema = yup.object().shape({
  name: yup
    .string()
    .min(5, "The length of the name must be more than 5 characters")
    .required("this is a required field"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("this is a required field"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({ mode: "onChange", resolver: yupResolver(scema) });
  const [error, setError] = useState<string>("");
  const onSubmit = async (data: IFormValues) => {
    if (await fetchFunc(data)) {
      reset();
    } else setError("some mistake has occurred");
  };
  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact__field">
        <input
          className={`contact__field__input ${errors.name ? "error" : ""}`}
          type="text"
          {...register("name")}
          placeholder="Name"
        />
        {errors.name && (
          <p className="contact__field__error">{errors.name?.message}</p>
        )}
      </div>
      <div className="contact__field">
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone"
          className={`contact__field__input ${errors.phone ? "error" : ""}`}
        />
        {errors.phone && (
          <p className="contact__field__error">{errors.phone?.message}</p>
        )}
      </div>

      <div className="contact__field">
        <input
          className={`contact__field__input ${errors.email ? "error" : ""}`}
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        {errors.email && (
          <p className="contact__field__error">{errors.email.message}</p>
        )}
      </div>
      <div className="contact__field">
        <button className="btn btn-reset contact__btn">Send</button>
        {error && <p className="contact__field__error">{error}</p>}
      </div>
    </form>
  );
};

export default Form;
