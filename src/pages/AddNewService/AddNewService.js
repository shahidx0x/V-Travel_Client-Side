import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddNewService = () => {
  const notify = () => toast.success("Submitted Successfully ");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("https://hidden-woodland-99652.herokuapp.com/services", data);
    notify();
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <ToastContainer />
      <div className="add-service">
        <h2 className="text-center">
          <span>Add a New Service</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Service Name"
            {...register("name", { required: true, maxLength: 80 })}
          />
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <input
            type="number"
            placeholder="Ratings"
            {...register("ratings", { required: true })}
          />

          <input
            type="url"
            placeholder="Upload Image Url"
            {...register("img", { required: true })}
          />
          <textarea {...register("details", { required: true })} />
          <input
            style={{ border: "3px solid darkred", borderRadius: "15px" }}
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default AddNewService;
